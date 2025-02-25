import os
import tempfile
import time

import requests
from bs4 import BeautifulSoup
from PIL import Image


def computer_control(env, command, x=None, y=None, text_content=None, key_name=None):
    """Handle all mouse/keyboard actions using xdotool"""
    try:
        if command == "mouse_move":
            if x is None or y is None:
                # Extract the som informaiton.
                som_info = env.get_som_image(env.render())[0][1]
                x, y = som_info[str(x)][0], som_info[str(x)][1]
                # return "Error: x and y coordinates required for mouse_move"
            env.run_command(f"xdotool mousemove --sync {x} {y}")
            return f"Moved mouse to ({x}, {y})"

        elif command == "left_click":
            env.run_command("xdotool click 1")
            return "Left clicked"

        elif command == "right_click":
            env.run_command("xdotool click 3")
            return "Right clicked"

        elif command == "double_click":
            env.run_command("xdotool click --repeat 2 --delay 500 1")
            return "Double clicked"

        elif command == "left_click_drag":
            if x is None or y is None:
                return "Error: x and y coordinates required for left_click_drag"
            env.run_command(f"xdotool mousedown 1 mousemove --sync {x} {y} mouseup 1")
            return f"Dragged to ({x}, {y})"

        elif command == "type":
            if not text_content:
                return "Error: text_content required for typing"
            env.run_command(f'xdotool type --delay 12 -- "{text_content}"')
            return f"Typed: {text_content}"

        elif command == "key":
            if not key_name:
                return "Error: key_name required for key press"
            env.run_command(f"xdotool key -- {key_name}")
            return f"Pressed key: {key_name}"

        elif command == "cursor_position":
            result = env.run_command("xdotool getmouselocation --shell")[0]
            return result.split("\n")[0:2]  # Returns X and Y coordinates

        return f"Unknown command: {command}"
    except Exception as e:
        return f"Computer control error: {str(e)}"


def screenshot(env, *args, **kwargs):
    """Capture and return screenshot path"""
    try:
        return env.render()
    except Exception as e:
        return f"Screenshot failed: {str(e)}"


def bash(env, command, workdir="/home/devuser/evaluation", root=False):
    """Execute bash command with proper error handling"""
    try:
        if not command:
            return "Error: No command provided"

        result, exit_code = env.run_command(
            command, with_bash_ic=True, workdir=workdir, root=root
        )
        if exit_code != 0:
            return f"Command failed (exit {exit_code}): {result}"
        return result
    except Exception as e:
        return f"Bash error: {str(e)}"


def file_edit(env, command, path, **kwargs):
    """Handle all file operations with validation"""
    try:
        # Validate path format using string operations instead of Path
        if not path.startswith("/"):
            return "Error: Path must be absolute"

        if command == "view":
            return _handle_view(env, path, kwargs.get("view_range"))
        elif command == "create":
            return _handle_create(env, path, kwargs.get("file_text"))
        elif command == "str_replace":
            return _handle_str_replace(
                env, path, kwargs.get("old_str"), kwargs.get("new_str")
            )
        elif command == "insert":
            # if new_str is None, then check for file_text
            if kwargs.get("new_str") is None:
                return _handle_insert(
                    env, path, kwargs.get("insert_line"), kwargs.get("file_text")
                )
            else:
                return _handle_insert(
                    env, path, kwargs.get("insert_line"), kwargs.get("new_str")
                )

        return f"Unknown file command: {command}"
    except Exception as e:
        return f"File operation failed: {str(e)}"


def _handle_view(env, path, view_range):
    """View file contents with optional line range"""
    try:
        content = env.file_read(path)
    except Exception as e:
        return f"Error reading file: {str(e)}"

    if content is None:
        return "Error: File does not exist or cannot be read"

    if view_range:
        try:
            start, end = map(int, view_range)
            lines = content.split("\n")[start:end]
            return "\n".join([f"{i+start} | {line}" for i, line in enumerate(lines)])
        except:
            return "Invalid view_range format - use [start_line, end_line]"
    else:
        try:
            lines = content.split("\n")
            return "\n".join([f"{i} | {line}" for i, line in enumerate(lines)])
        except:
            return "Error: File does not exist or cannot be read"


def _handle_create(env, path, content):
    """Create new file with content"""
    if not content:
        return "Error: file_text required for creation"

    try:
        # Attempt to read first to check existence
        existing = env.file_read(path)
        if existing is not None:
            if len(existing.strip()) > 0:
                return "Error: File already exists"
    except:
        pass  # File doesn't exist yet

    try:
        env.file_write(path, content)
        return f"Created file at {path}"
    except Exception as e:
        return f"Error creating file: {str(e)}"


def _handle_str_replace(env, path, old_str, new_str):
    """Replace string in file with validation"""
    if not old_str:
        return "Error: old_str required for replacement"

    try:
        content = env.file_read(path)
    except Exception as e:
        return f"Error reading file: {str(e)}"

    # if content.count(old_str) != 1:
    #     return "Error: old_str must exist exactly once in file"

    new_content = content.replace(old_str, new_str or "")
    try:
        env.file_write(path, new_content)
        return f"Replaced '{old_str}' in {path}"
    except Exception as e:
        return f"Error writing file: {str(e)}"


def _handle_insert(env, path, line, new_str):
    """Insert text at specific line"""
    if line < 0:
        return "Error: Invalid line number"
    if not new_str:
        return "Error: new_str required for insertion"

    try:
        content = env.file_read(path).split("\n")
    except Exception as e:
        return f"Error reading file: {str(e)}"

    if line > len(content):
        return "Error: Line number exceeds file length"

    content.insert(line, new_str)
    try:
        env.file_write(path, "\n".join(content))
        return f"Inserted text at line {line} in {path}"
    except Exception as e:
        return f"Error writing file: {str(e)}"


def view_html_preview(env, *args, **kwargs):
    time.sleep(2)  # wait for file and html page to refres
    return env.render().crop((994, 105, 1920, 1053))


def view_python_preview(
    env, workdir="/home/devuser/evaluation", filename="graph.py", *args, **kwargs
):
    temp_dir = tempfile.mkdtemp()
    # Run the python file
    # Copy graph.py to workspace
    env.run_command(f"cp {os.path.join(workdir, filename)} /workspace")
    # Replace plt.show() with # plt.show()
    env.run_command(
        f'sed -i "s/plt.show()/# plt.show()/g" {filename}',
        with_bash_ic=True,
        workdir="/workspace",
    )
    # Run the python file
    env.run_command(f"python3 {filename}", with_bash_ic=True, workdir="/workspace")
    filename = "generated.png"
    env.copy_from_container(
        os.path.join("/workspace", filename), os.path.join(temp_dir, filename)
    )
    # breakpoint()
    return Image.open(os.path.join(temp_dir, filename))


def view_original_image(
    env, workdir="/home/devuser/evaluation", filename="image.png", *args, **kwargs
):
    temp_dir = tempfile.mkdtemp()
    env.copy_from_container(
        os.path.join(workdir, filename), os.path.join(temp_dir, filename)
    )
    return Image.open(os.path.join(temp_dir, filename))


def zoom_in(env, times: int = 1, *args, **kwargs):
    for _ in range(times):
        env.run_command("xdotool key ctrl+equal")


def zoom_out(env, times: int = 1, *args, **kwargs):
    for _ in range(times):
        env.run_command("xdotool key ctrl+minus")


def _get_dropdown_texts(html_content, *args, **kwargs):
    soup = BeautifulSoup(html_content, "html.parser")
    # Find all dropdowns using BeautifulSoup equivalent of the JS function
    selects = soup.find_all("select")
    role_based_dropdowns = soup.find_all(
        attrs={"role": ["listbox", "combobox", "menu"]}
    )
    class_based_dropdowns = soup.find_all(class_=["dropdown", "combo-box"])

    all_dropdowns = [*selects, *role_based_dropdowns, *class_based_dropdowns]
    dropdown_texts = []

    for dropdown in all_dropdowns:
        # Find all potential items but check for nesting
        all_items = dropdown.find_all(["div"], class_="monaco-icon-label-container")

        # Filter out items that are children of other items
        top_level_items = []
        for item in all_items:
            is_child = any(
                item in other_item.descendants
                for other_item in all_items
                if other_item != item
            )
            if not is_child:
                top_level_items.append(item)

        # Process only the top-level items
        for item in top_level_items:
            combined_text_all = []
            for child in item.children:
                texts = [text.strip() for text in child.stripped_strings]
                combined_text = "".join(texts)
                combined_text_all.append(combined_text)
            combined_text_all = " ".join(combined_text_all)
            combined_text_all = combined_text_all.replace("&nbsp;", " ")
            if combined_text_all:
                dropdown_texts.append(combined_text_all)

    # Print results
    print(f"Found {len(dropdown_texts)} dropdown items:")
    for text in dropdown_texts:
        print(f"- {text}")

    return dropdown_texts


def view_structure(env, file_path, *args, **kwargs):
    return env.run_command(f"tree -L 2 --gitignore {file_path}")[0]


def get_file_outline(env, file_path, *args, **kwargs):
    env.run_command("xdotool key ctrl+p")
    env.run_command(f'xdotool type "{file_path}"', wait=3)
    html_content = requests.get(
        f"http://localhost:{env.host_port_3000}/api/get-dom"
    ).json()["dom"]
    dropdowns = _get_dropdown_texts(html_content)
    if len(dropdowns) >= 1 and dropdowns[0] != "No results found":
        env.run_command(f"xdotool key Return")
        env.run_command("xdotool key ctrl+shift+o", wait=3)
        html_content = requests.get(
            f"http://localhost:{env.host_port_3000}/api/get-dom"
        ).json()["dom"]
        dropdowns = _get_dropdown_texts(html_content)
        env.run_command("xdotool key Escape")
        return "\n - ".join(dropdowns)
    else:
        env.run_command("xdotool key Escape")
        return "File was not found"


def file_name_search(env, file_name, *args, **kwargs):
    env.run_command("xdotool key ctrl+p")
    env.run_command(f'xdotool type "{file_name}"', wait=3)
    html_content = requests.get(
        f"http://localhost:{env.host_port_3000}/api/get-dom"
    ).json()["dom"]
    dropdowns = _get_dropdown_texts(html_content)
    env.run_command("xdotool key Escape")
    return "\n - ".join(dropdowns)


# def search_repository(env, query, use_regex = False, include_paths = None, exclude_paths = None):
def search_repository(
    env, query, include_paths=None, exclude_paths=None, *args, **kwargs
):

    # Build the grep command
    if include_paths is None:
        grep_cmd = f"grep -ir '{query}' *"
    else:
        grep_cmd = f"grep -ir '{query} {' '.join(include_paths)}'"
    result = env.run_command(grep_cmd)[0]

    return result
    # Copy file from container to host for editing
    temp_file = f"/tmp/{os.path.basename(file_path)}"
    if not file_path.startswith("/testbed/"):
        file_path = f"/testbed/{file_path}"
    env.copy_from_container(file_path, temp_file)

    with open(temp_file, "r") as f:
        lines = f.readlines()

    if operation == "insert":
        # if line_start is None:
        # If no line number specified, append to end of file
        if insert_line != -1:
            lines = (
                lines[:insert_line]
                + (new_str + "\n").splitlines()
                + lines[insert_line:]
            )
        else:
            lines.append((new_str + "\n").splitlines() + "\n")
        # else:
        #     # Insert at specified line (converting from 1-based to 0-based index)
        #     lines.insert(line_start - 1, search_text + '\n')

    elif operation == "replace":
        search_text = old_str
        line_start = None
        replace_text = new_str

        if search_text is None and line_start is not None:
            # Replace entire line range
            if line_end is None:
                line_end = line_start
            # Replace lines from line_start to line_end with replace_text
            lines[line_start - 1 : line_end] = [replace_text + "\n"]
        else:
            # Replace specific text content
            content = "".join(lines)
            if line_start is not None and line_end is not None:
                # If line range is specified, only replace within that range
                before = "".join(lines[: line_start - 1])
                target = "".join(lines[line_start - 1 : line_end])
                after = "".join(lines[line_end:])

                target = target.replace(search_text, replace_text)
                content = before + target + after
            else:
                # Replace all instances of search_text with replace_text
                count = content.count(search_text)
                if count == 0:
                    return f"Search text not found in file {file_path}"
                content = content.replace(search_text, replace_text)
            lines = content.splitlines(keepends=True)

    # Write modified content back to temp file
    with open(temp_file, "w") as f:
        f.writelines(lines)

    # Copy file back to container
    env.copy_to_container(temp_file, file_path)

    return f"File {file_path} has been modified"


def get_diff_patch(env, workdir="/home/devuser/evaluation", *args, **kwargs):
    return env.run_command(f"git --no-pager -C {workdir} diff --unified --no-color")[0]


def get_relevant_schemas(env, workdir="/home/devuser/evaluation", *args, **kwargs):
    """Read and return contents of all CSV files in the working directory"""
    try:
        # First get list of CSV files
        result = env.run_command(f'find {workdir} -name "*.csv"')[0]
        if not result:
            return "No CSV files found"

        csv_files = result.strip().split("\n")
        csv_files = [x.strip() for x in csv_files if x.strip()]
        schemas = {}

        # Create temporary directory for file transfers
        temp_dir = tempfile.mkdtemp()

        # Process each CSV file
        for csv_path in csv_files:
            try:
                # Get filename without path
                filename = os.path.basename(csv_path)

                # Copy file from container to temp directory
                temp_file = os.path.join(temp_dir, filename)
                env.copy_from_container(csv_path, temp_file)

                # Read file contents
                with open(temp_file, "r") as f:
                    content = f.read()

                schemas[filename] = content

            except Exception as e:
                schemas[filename] = f"Error reading {filename}: {str(e)}"

        # Format the schemas
        formatted_schemas = """Here are relevant descriptions that might be useful for the task:
```
"""
        for filename, content in schemas.items():
            formatted_schemas += f"## {filename.replace('.csv', '')}:\n{content}\n\n\n"
        formatted_schemas += "```"
        # breakpoint()
        return formatted_schemas

    except Exception as e:
        return f"Error accessing schemas: {str(e)}"


def test_sql(env, *args, **kwargs):
    # breakpoint()
    return env.run_command(
        f"python3 test_sql.py sql_query.sql", workdir="/home/devuser/evaluation"
    )[0]


FUNCTIONS = {
    "computer_control": computer_control,
    "screenshot": screenshot,
    "bash": bash,
    "file_edit": file_edit,
    "view_html_preview": view_html_preview,
    "view_original_image": view_original_image,
    "zoom_in": zoom_in,
    "zoom_out": zoom_out,
    "view_structure": view_structure,
    "get_file_outline": get_file_outline,
    "file_name_search": file_name_search,
    "search_repository": search_repository,
    "view_python_preview": view_python_preview,
    "get_diff_patch": get_diff_patch,
    "get_relevant_schemas": get_relevant_schemas,
    "test_sql": test_sql,
}
