import json
import docker
import tarfile
import io
import re

def get_file_content(env, file_path):
    """
    Retrieve the content of a file from the container.
    """
    try:
        bits, stat = env.container.get_archive(file_path)
    except docker.errors.NotFound:
        print(f"File '{file_path}' not found in the container.")
        return None
    except docker.errors.APIError as e:
        print(f"Error retrieving the file '{file_path}': {e}")
        return None

    # Read the file content from the tar stream
    file_like_object = io.BytesIO()
    for chunk in bits:
        file_like_object.write(chunk)
    file_like_object.seek(0)

    # Extract the file from the tar archive
    try:
        with tarfile.open(fileobj=file_like_object) as tar:
            members = tar.getmembers()
            if not members:
                print(f"No files found in the tar archive for '{file_path}'.")
                return None
            member = members[0]
            f = tar.extractfile(member)
            file_content = f.read().decode('utf-8')
            return file_content
    except Exception as e:
        print(f"Error extracting the file '{file_path}': {e}")
        return None

def parse_json_file(env, file_path):
    """
    Retrieve and parse a JSON file from the container.
    """
    file_content = get_file_content(env, file_path)
    if file_content is None:
        return None

    # Remove comments from the JSON content
    json_content_no_comments = re.sub(
        r'/\*.*?\*/|//.*?(?=\n|\r)', '', file_content, flags=re.DOTALL
    )

    # Parse the JSON content
    try:
        json_data = json.loads(json_content_no_comments)
        return json_data
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON from file '{file_path}': {e}")
        return None

def file_exists(env, file_path):
    """
    Check if a file exists in the container.
    """
    try:
        env.container.get_archive(file_path)
        return True
    except docker.errors.NotFound:
        return False
    except docker.errors.APIError as e:
        print(f"Error checking existence of file '{file_path}': {e}")
        return False


def eval_keybinding(env, key, command):
    """
    Evaluate if the given keybinding is set in VSCode's keybindings.json
    """
    keybindings_file = "/home/devuser/.config/Code - OSS/User/keybindings.json"
    keybindings_data = parse_json_file(env, keybindings_file)
    if keybindings_data is None:
        return False

    for entry in keybindings_data:
        if entry.get('key') == key and entry.get('command') == command:
            return True
    return False

def eval_extension_installed(env, extension_name):
    """
    Check if the specified extension is installed in VSCode.
    """
    output, exit_code = env.run_command('code --list-extensions')
    if exit_code != 0:
        print(f"Error listing extensions: {output}")
        return False
    installed_extensions = [x.strip() for x in output.strip().split('\n')]
    return extension_name in installed_extensions

def eval_setting_value_multiple(env, setting_keys, expected_values):
    return all(eval_setting_value(env, key, value) for key, value in zip(setting_keys, expected_values))

def eval_setting_value(env, setting_key, expected_value):
    """
    Evaluate if the given setting key in VSCode's settings.json has the expected value.
    """
    settings_file = "/home/devuser/.config/Code - OSS/User/settings.json"
    settings_data = parse_json_file(env, settings_file)
    if settings_data is None:
        return False

    # Handle nested keys if necessary
    keys = setting_key.split('.')
    value = settings_data
    v = None
    try:
        for key in keys:
            try:
                v = value[key]
            except KeyError:
                # Perhaps we should not split the keys
                continue
    except (TypeError):
        return False
    if v==expected_value:
        return True
    try:
        v = value[setting_key]
    except KeyError:
        return False
    try:
        return v.replace('"','') == expected_value.replace('"','')
    except Exception as e:
        print('Error while evaluating', e)
        if isinstance(v, bool):
            if isinstance(expected_value, str):
                return v == (expected_value.lower() == 'true')
            return v == expected_value
        return False

def eval_locale(env, locale):
    """
    Evaluate if the locale is set correctly in VSCode's locale.json
    """
    locale_file = "/home/devuser/.config/Code - OSS/User/locale.json"
    locale_data = parse_json_file(env, locale_file)
    if locale_data is None:
        return False

    current_locale = locale_data.get('locale')
    return current_locale == locale

def eval_keybinding_unset(env, key):
    """
    Evaluate if the given keybinding is unset (command is "-") in VSCode's keybindings.json
    """
    keybindings_file = "/home/devuser/.config/Code - OSS/User/keybindings.json"
    keybindings_data = parse_json_file(env, keybindings_file)
    if keybindings_data is None:
        return False

    for entry in keybindings_data:
        if entry.get('key') == key and entry.get('command') == '-':
            return True
    return False

def eval_files_exclude(env, *patterns):
    """
    Evaluate if a pattern is excluded in VSCode's settings.json
    """
    settings_file = "/home/devuser/.config/Code - OSS/User/settings.json"
    settings_data = parse_json_file(env, settings_file)
    if settings_data is None:
        return False

    files_exclude = settings_data.get('files.exclude', {})
    for pattern in patterns:
        is_excluded = files_exclude.get(pattern)
        if is_excluded is True:
            return True
    return False
    # if isinstance(pattern, list):
    #     for p in pattern:
    #         is_excluded = files_exclude.get(p)
    #         if is_excluded is True:
    #             return True
    #     return False
    # is_excluded = files_exclude.get(pattern)
    return is_excluded is True

def eval_document_replacement(env, file_path, old_str, new_str):
    """
    Evaluate if a document has had a string replaced.
    """
    file_content = get_file_content(env, file_path)
    if file_content is None:
        return False

    has_old_str = old_str in file_content
    has_new_str = new_str in file_content

    return not has_old_str and has_new_str

def eval_autocreate_file_on_startup(env, file_path):
    """
    Simulate VS Code startup and check if a file is automatically created.
    """
    output, exit_code = env.run_command('code --no-sandbox --disable-gpu &')
    if exit_code != 0:
        print(f"Error starting VS Code: {output}")
        return False

    # Wait for the file to be created
    import time
    max_wait_time = 10  # seconds
    elapsed = 0
    while elapsed < max_wait_time:
        if file_exists(env, file_path):
            return True
        time.sleep(1)
        elapsed += 1
    return False

def eval_workspace_saved(env, workspace_path):
    """
    Check if the workspace file exists.
    """
    return file_exists(env, workspace_path)

def eval_python_error_reporting(env, error_type, expected_value):
    """
    Evaluate if Python error reporting is set correctly in VSCode's settings.json
    """
    settings_file = "/home/devuser/.config/Code - OSS/User/settings.json"
    settings_data = parse_json_file(env, settings_file)
    if settings_data is None:
        return False

    diagnostic_overrides = settings_data.get('python.analysis.diagnosticSeverityOverrides', {})
    actual_value = diagnostic_overrides.get(error_type)

    return actual_value == expected_value

def eval_custom_background_set(env, image_path):
    """
    Evaluate if the custom background is set to the specified image in VSCode's settings.json
    """
    settings_file = "/home/devuser/.config/Code - OSS/User/settings.json"
    settings_data = parse_json_file(env, settings_file)
    if settings_data is None:
        return False

    color_customizations = settings_data.get('workbench.colorCustomizations', {})
    editor_background = color_customizations.get('editor.background')

    expected_value = f"url(file://{image_path})"
    return editor_background == expected_value

def eval_file_created(env, file_path):
    """
    Check if the specified file exists in the container.
    """
    return file_exists(env, file_path)

def eval_increase_indent(env, file_path, start_line, end_line):
    """
    Check if the lines in the specified range have increased indentation.
    """
    file_content = get_file_content(env, file_path)
    if file_content is None:
        return False

    lines = file_content.splitlines()
    selected_lines = lines[start_line - 1:end_line]

    for line in selected_lines:
        if not line.startswith('    ') and not line.startswith('\t'):
            return False
    return True

def eval_numpy_visualization_enabled(env):
    """
    Check if the Python extension (ms-python.python) is installed, enabling NumPy visualization.
    """
    return eval_extension_installed(env, 'ms-python.python')

def eval_autosave_settings(env, auto_save, delay):
    """
    Evaluate if 'files.autoSave' and 'files.autoSaveDelay' are set correctly in VSCode's settings.json
    """
    settings_file = "/home/devuser/.config/Code - OSS/User/settings.json"
    settings_data = parse_json_file(env, settings_file)
    if settings_data is None:
        return False

    auto_save_value = settings_data.get('files.autoSave')
    delay_value = settings_data.get('files.autoSaveDelay')

    return str(auto_save_value) == str(auto_save) and str(delay_value) == str(delay)
