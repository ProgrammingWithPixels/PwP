import os
import subprocess
from pathlib import Path


def computer_control(env, command, x=None, y=None, text_content=None, key_name=None):
    """Handle all mouse/keyboard actions using xdotool"""
    try:
        if command == "mouse_move":
            if x is None or y is None:
                # Extract the som informaiton.
                som_info = env.get_som_image(env.render())[0][1]
                x, y = som_info[str(x)][0], som_info[str(x)][1]

                # return "Error: x and y coordinates required for mouse_move"
            else:
                x = int(x * 1.5)
                y = int(y * 1.35)
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
            x, y = result.split("\n")[0:2]  # Returns X and Y coordinates
            # x,y = int(x.split("=")[1]), int(y.split("=")[1])
            x = int(x / 1.5)
            y = int(y / 1.35)
            return f"Cursor position: ({x}, {y})"

        return f"Unknown command: {command}"
    except Exception as e:
        return f"Computer control error: {str(e)}"


def screenshot(env, *args, **kwargs):
    """Capture and return screenshot path"""
    try:
        return env.render().resize((1280, 800))
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


FUNCTIONS = {
    "computer_control": computer_control,
    "screenshot": screenshot,
    "bash": bash,
    "file_edit": file_edit,
}
