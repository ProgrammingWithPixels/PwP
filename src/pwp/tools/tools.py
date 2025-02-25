all_tools = [
    {
        "type": "function",
        "function": {
            "name": "view_structure",
            "description": "View the structure of the current directory or a specified directory.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the directory to view the structure of.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "open_file",
            "description": "Open a specific file in the editor.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The relative or absolute path to the file to open.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "save_file",
            "description": "Save the current file or a specified file.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The path to the file to save. If omitted, saves the currently active file.",
                    }
                },
                "required": [],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "edit_file",
            "description": "Edit a file by inserting, replacing, or deleting text.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file to edit.",
                    },
                    "operation": {
                        "type": "string",
                        "enum": ["insert", "replace"],
                        "description": "The type of edit operation.",
                    },
                    "old_str": {
                        "type": "string",
                        "description": "The string to replace. Only used if operation is replace. Make sure to follow proper indentation.",
                    },
                    "new_str": {
                        "type": "string",
                        "description": "The string to replace the old string with. Only used if operation is replace. Make sure to follow proper indentation.",
                    },
                    "insert_line": {
                        "type": "integer",
                        "description": "Inserts the new string after the specified line number. For example, if you want to insert a string at the beginning of a file, you can set this to 0. Only used if operation is insert. By default, the string is appended to the end of the file. Use sparingly.",
                    },
                    # "search_text": {
                    #   "type": "string",
                    #   "description": "The text content to insert or replace. Make sure to provide the exact text, so multiple instances of the same text are not replaced. You can provide a line range to be more specific. Not required if you want to replace specific lines directly. For replace operation, if line range is provided while search_text is not, the entire line range will be replaced."
                    # },
                    # "replace_text": {
                    #   "type": "string",
                    #   "description": "The text content to replace the search text with. Not required if you want to insert text. Make sure to use tabs consistently."
                    # },
                    # "line_start": {
                    #   "type": "integer",
                    #   "description": "The starting line number for the edit operation (1-based index)."
                    # },
                    # "line_end": {
                    #   "type": "integer",
                    #   "description": "The ending line number for the edit operation."
                    # }
                },
                "required": ["file_path", "operation"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_repository_complex",
            "description": "Search for a string or regular expression in the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search string or regular expression.",
                    },
                    "use_regex": {
                        "type": "boolean",
                        "description": "Set to true if 'query' is a regular expression.",
                        "default": False,
                    },
                    "include_paths": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Optional. List of file paths or patterns to include in the search. By default, searches for all files in the current repository.",
                    },
                    "exclude_paths": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Optional. List of file paths or patterns to exclude from the search. By default, searches for all files in the current repository.",
                    },
                },
                "required": ["query"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_repository",
            "description": "Search for a string or regular expression in the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search string or regular expression.",
                    }
                },
                "required": ["query"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_file_outline",
            "description": "Retrieve the outline of a file, including symbols and their locations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file. If not provided the current active file is used.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "create_file",
            "description": "Create a new file with specified content.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path where the new file will be created.",
                    },
                    "content": {
                        "type": "string",
                        "description": "The initial content to write into the file. Can be empty as well.",
                    },
                },
                "required": ["file_path", "content"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "execute_file",
            "description": "Execute a file, such as a script or program. However, only possible if the file is executable. Be careful to make sure to provide the correct arguments. Also, it may be possible to use the run_shell_command tool instead. Further, make sure file execution may have irreversible side-effects.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file to execute.",
                    },
                    "arguments": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Optional. Command-line arguments to pass to the file.",
                    },
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "run_shell_command",
            "description": "Execute a shell command in the integrated terminal.",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "The shell command to execute.",
                    },
                    "working_directory": {
                        "type": "string",
                        "description": "Optional. The directory in which to execute the command. By default, the root of the repository is used.",
                    },
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "run_python_script",
            "description": "Run a temporary python script, with the provided contents. Can be used in alternative to run_shell_command. The file will be executed in the root of the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_contents": {
                        "type": "string",
                        "description": "The contents of the python file to execute.",
                    }
                },
                "required": ["file_contents"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "jump_to_symbol_definitions",
            "description": "Jump to the definitions of a symbol within the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "symbol_name": {
                        "type": "string",
                        "description": "The name of the symbol to find. Be precise.",
                    },
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The file to limit the search to. If not provided, the current active file is used.",
                    },
                    "line_number": {
                        "type": "integer",
                        "description": "Optional. The line number to limit the search to.",
                    },
                },
                "required": ["symbol_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "jump_to_definition",
            "description": "Navigate to the definition of a symbol.",
            "parameters": {
                "type": "object",
                "properties": {
                    "symbol_name": {
                        "type": "string",
                        "description": "The name of the symbol.",
                    },
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The current file path for context. If not provided, the current active file is used.",
                    },
                    "line_number": {
                        "type": "integer",
                        "description": "Optional. The line number in the current file where the symbol is referenced.",
                    },
                },
                "required": ["symbol_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_references",
            "description": "Find all references to a symbol in the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "symbol_name": {
                        "type": "string",
                        "description": "The name of the symbol.",
                    },
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The file path for context.",
                    },
                },
                "required": ["symbol_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "set_breakpoint",
            "description": "Set a breakpoint at a specific location.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file.",
                    },
                    "line_number": {
                        "type": "integer",
                        "description": "The line number to set the breakpoint on.",
                    },
                    "condition": {
                        "type": "string",
                        "description": "Optional. A condition that controls when the breakpoint is activated.",
                    },
                },
                "required": ["file_path", "line_number"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "start_debugging",
            "description": "Start a debugging session with specified configurations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "configuration_name": {
                        "type": "string",
                        "description": "The name of the debugging configuration to use.",
                    }
                },
                "required": ["configuration_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "run_tests",
            "description": "Execute unit tests in the project.",
            "parameters": {
                "type": "object",
                "properties": {
                    "test_suite_name": {
                        "type": "string",
                        "description": "Optional. The name of the test suite to run.",
                    },
                    "test_case_name": {
                        "type": "string",
                        "description": "Optional. The name of a specific test case to run.",
                    },
                },
                "required": [],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "install_extension",
            "description": "Install a VSCode extension.",
            "parameters": {
                "type": "object",
                "properties": {
                    "extension_id": {
                        "type": "string",
                        "description": "The identifier of the extension to install (e.g., 'ms-python.python').",
                    }
                },
                "required": ["extension_id"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "format_document",
            "description": "Auto-format a document or selection according to style guidelines.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file to format. Formatter may not always be present, and able to format the entire file.",
                    },
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "file_name_search",
            "description": "Search for a file by its name. Can be used to find specific files in the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_name": {
                        "type": "string",
                        "description": "The name of the file to search for.",
                    }
                },
                "required": ["file_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_file_content",
            "description": "Get the content of a file. Can be used to read the content of a file, or to get the content of the current active file.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file.",
                    },
                    "content_start": {
                        "type": "string",
                        "description": "Optional. The starting content to get the file content from. Cannot be clubbed with line_start and line_end. If provided, range needs to be provided as well. For instance, if you want to inspect a function: `def main():` and code around it, you can provide the starting content as `def main()` and the range as `20` to get 20 lines of code before and after the function.",
                    },
                    "content_range": {
                        "type": "integer",
                        "description": "Optional. The range of content to get the file content from. Cannot be clubbed with line_start and line_end. If provided, content_start needs to be provided as well.",
                    },
                    "line_start": {
                        "type": "integer",
                        "description": "Optional. The starting line number to get the content from.",
                    },
                    "line_end": {
                        "type": "integer",
                        "description": "Optional. The ending line number to get the content from.",
                    },
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "organize_imports",
            "description": "Sort and remove unused imports in a file.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "rename_symbol",
            "description": "Rename a symbol throughout the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "old_name": {
                        "type": "string",
                        "description": "The current name of the symbol.",
                    },
                    "new_name": {
                        "type": "string",
                        "description": "The new name for the symbol.",
                    },
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The file path for context.",
                    },
                    "line_number": {
                        "type": "integer",
                        "description": "Optional. The line number where the symbol is located.",
                    },
                },
                "required": ["old_name", "new_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "view_git_diff",
            "description": "View the Git diff of a file or the entire project.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The path to a specific file to view the diff.",
                    }
                },
                "required": [],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "commit_changes",
            "description": "Commit staged changes to the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "message": {"type": "string", "description": "The commit message."}
                },
                "required": ["message"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "push_to_repository",
            "description": "Push local commits to the remote repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "remote_name": {
                        "type": "string",
                        "description": "Optional. The name of the remote repository (default is 'origin').",
                        "default": "origin",
                    },
                    "branch_name": {
                        "type": "string",
                        "description": "Optional. The name of the branch to push (default is the current branch).",
                    },
                },
                "required": [],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "create_branch",
            "description": "Create a new Git branch.",
            "parameters": {
                "type": "object",
                "properties": {
                    "branch_name": {
                        "type": "string",
                        "description": "The name of the new branch.",
                    },
                    "checkout": {
                        "type": "boolean",
                        "description": "Optional. If true, switch to the new branch after creation.",
                    },
                },
                "required": ["branch_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "merge_branch",
            "description": "Merge a Git branch into the current branch.",
            "parameters": {
                "type": "object",
                "properties": {
                    "source_branch": {
                        "type": "string",
                        "description": "The name of the branch to merge from.",
                    }
                },
                "required": ["source_branch"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "resolve_merge_conflicts",
            "description": "List files with merge conflicts and assist in resolving them.",
            "parameters": {"type": "object", "properties": {}},
            "required": [],
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_code_completion",
            "description": "Provide code completion suggestions at a specific location in a file.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file.",
                    },
                    "line_number": {
                        "type": "integer",
                        "description": "The line number where completion is requested.",
                    },
                    "column_number": {
                        "type": "integer",
                        "description": "The column number where completion is requested.",
                    },
                    "context": {
                        "type": "string",
                        "description": "Optional. Additional context or partial code to improve suggestions.",
                    },
                },
                "required": ["file_path", "line_number", "column_number"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_diagnostics",
            "description": "Retrieve errors, warnings, and informational messages for a file or the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "Optional. The path to the file to get diagnostics for.",
                    }
                },
                "required": [],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "add_to_memory",
            "description": "Add a string to the memory. Can be used to store information for later use. Can be used to add important code snippets, or additional crucial information to the context for later use. Feel free to invoke it often.",
            "parameters": {
                "type": "object",
                "properties": {
                    "memory_key": {
                        "type": "string",
                        "description": "The key to store the information under.",
                    }
                },
                "required": ["memory_key"],
            },
        },
    },
]

codeact_tools = [
    {
        "type": "function",
        "function": {
            "name": "bash",
            "description": "Run commands in a bash shell\n* When invoking this tool, the contents of the \"command\" parameter does NOT need to be XML-escaped.\n* You don't have access to the internet via this tool.\n* You do have access to a mirror of common linux and python packages via apt and pip.\n* State is persistent across command calls and discussions with the user.\n* To inspect a particular line range of a file, e.g. lines 10-25, try 'sed -n 10,25p /path/to/the/file'.\n* Please avoid commands that may produce a very large amount of output.\n* Please run long lived commands in the background, e.g. 'sleep 10 &' or start a server in the background.",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "The bash command to run.",
                    }
                },
                "required": ["command"],
            },
        },
    },
    {
        "function": {
            "name": "str_replace_editor",
            "description": "Custom editing tool for viewing, creating and editing files\n* State is persistent across command calls and discussions with the user\n* If `path` is a file, `view` displays the result of applying `cat -n`. If `path` is a directory, `view` lists non-hidden files and directories up to 2 levels deep\n* The `create` command cannot be used if the specified `path` already exists as a file\n* If a `command` generates a long output, it will be truncated and marked with `<response clipped>` \n\nNotes for using the `str_replace` command:\n* The `old_str` parameter should match EXACTLY one or more consecutive lines from the original file. Be mindful of whitespaces!\n* If the `old_str` parameter is not unique in the file, the replacement will not be performed. Make sure to include enough context in `old_str` to make it unique\n* The `new_str` parameter should contain the edited lines that should replace the `old_str`",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": [
                            "view",
                            "create",
                            "str_replace",
                            "insert",
                            "undo_edit",
                        ],
                        "description": "The commands to run. Allowed options are: `view`, `create`, `str_replace`, `insert`, `undo_edit`.",
                    },
                    "file_text": {
                        "description": "Required parameter of `create` command, with the content of the file to be created.",
                        "type": "string",
                    },
                    "insert_line": {
                        "description": "Required parameter of `insert` command. The `new_str` will be inserted AFTER the line `insert_line` of `path`.",
                        "type": "integer",
                    },
                    "new_str": {
                        "description": "Required parameter of `str_replace` command containing the new string. Required parameter of `insert` command containing the string to insert. Make sure to use proper indentation based on surrounding text.",
                        "type": "string",
                    },
                    "old_str": {
                        "description": "Required parameter of `str_replace` command containing the string in `path` to replace.",
                        "type": "string",
                    },
                    "path": {
                        "description": "Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`.",
                        "type": "string",
                    },
                    "view_range": {
                        "description": "Optional parameter of `view` command when `path` points to a file. If none is given, the full file is shown. If provided, the file will be shown in the indicated line number range, e.g. [11, 12] will show lines 11 and 12. Indexing at 1 to start. Setting `[start_line, -1]` shows all lines from `start_line` to the end of the file.",
                        "items": {"type": "integer"},
                        "type": "array",
                    },
                },
                "required": ["command", "path"],
            },
        },
        "type": "function",
    },
]

design2code_tools = [
    {
        "type": "function",
        "function": {
            "name": "get_screenshot",
            "description": "Get a screenshot of the current rendered html page.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "zoom_in",
            "description": "Zoom in on the current rendered html page.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "zoom_out",
            "description": "Zoom out on the current rendered html page.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "bash",
            "description": "Run commands in a bash shell\n* When invoking this tool, the contents of the \"command\" parameter does NOT need to be XML-escaped.\n* You don't have access to the internet via this tool.\n* You do have access to a mirror of common linux and python packages via apt and pip.\n* State is persistent across command calls and discussions with the user.\n* To inspect a particular line range of a file, e.g. lines 10-25, try 'sed -n 10,25p /path/to/the/file'.\n* Please avoid commands that may produce a very large amount of output.\n* Please run long lived commands in the background, e.g. 'sleep 10 &' or start a server in the background.",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "The bash command to run.",
                    }
                },
                "required": ["command"],
            },
        },
    },
    {
        "function": {
            "name": "str_replace_editor",
            "description": "Custom editing tool for viewing, and editing index.html file\n* State is persistent across command calls\n* If a `command` generates a long output, it will be truncated and marked with `<response clipped>` \n\nNotes for using the `str_replace` command:\n* The `old_str` parameter should match EXACTLY one or more consecutive lines from the original file. Be mindful of whitespaces!\n* If the `old_str` parameter is not unique in the file, the replacement will not be performed. Make sure to include enough context in `old_str` to make it unique\n* The `new_str` parameter should contain the edited lines that should replace the `old_str`",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": ["view_file", "str_replace", "insert", "undo_edit"],
                        "description": "The commands to run. Allowed options are: `view_file`, `str_replace`, `insert`, `undo_edit`.",
                    },
                    "insert_line": {
                        "description": "Required parameter of `insert` command. Cannot be used with other commands. The `new_str` will be inserted AFTER the line `insert_line`. If none is provided, the `new_str` will be inserted at the end of the file.",
                        "type": "integer",
                    },
                    "new_str": {
                        "description": "Required parameter of `str_replace` command containing the new string. Required parameter of `insert` command containing the string to insert. Make sure to use proper indentation based on surrounding text.",
                        "type": "string",
                    },
                    "old_str": {
                        "description": "Required parameter of `str_replace` command containing the string to replace.",
                        "type": "string",
                    },
                    "view_range": {
                        "description": "Optional parameter of `view` command. If none is given, the full file is shown. If provided, the file will be shown in the indicated line number range, e.g. [11, 12] will show lines 11 and 12. Indexing at 1 to start. Setting `[start_line, -1]` shows all lines from `start_line` to the end of the file.",
                        "items": {"type": "integer"},
                        "type": "array",
                    },
                },
                "required": ["command"],
            },
        },
        "type": "function",
    },
]

cua_tool_categ1 = [
    {
        "type": "function",
        "function": {
            "name": "computer_control",
            "description": "Control mouse and keyboard actions using xdotool",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "The command to execute. Exmaple xdotool type 'hello world'. If using mousemove command, do not use comma between x and y coordinates. Example `xdotool mousemove 395, 64` is illegal while `xdotool mousemove 395 64` is correct.",
                    }
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "execution_done",
            "description": "Issue this command when you believe the task is complete.",
            "parameters": {},
        },
    },
]

cua_tools = [
    {
        "type": "function",
        "function": {
            "name": "computer_control",
            "description": "Control mouse and keyboard actions using xdotool",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": [
                            "mouse_move",
                            "left_click",
                            "right_click",
                            "double_click",
                            "left_click_drag",
                            "type",
                            "key",
                            "cursor_position",
                        ],
                        "description": "Type of input action to perform",
                    },
                    "x": {
                        "type": "integer",
                        "description": "X coordinate for mouse actions. If only x is provided, it will be treated as coordinates of SoM element.",
                    },
                    "y": {
                        "type": "integer",
                        "description": "Y coordinate for mouse actions",
                    },
                    "text_content": {
                        "type": "string",
                        "description": "Text to type for keyboard input",
                    },
                    "key_name": {
                        "type": "string",
                        "description": "Keyboard key name for key press",
                    },
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "screenshot",
            "description": "Capture current screen image",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "bash",
            "description": "Execute bash commands in the system shell",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "Bash command to execute",
                    }
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "file_edit",
            "description": "Edit files through various operations",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": ["view", "create", "str_replace", "insert"],
                        "description": "Edit operation to perform",
                    },
                    "path": {
                        "type": "string",
                        "description": "Absolute path to target file/directory",
                    },
                    "old_str": {
                        "type": "string",
                        "description": "Text to replace (str_replace only)",
                    },
                    "new_str": {
                        "type": "string",
                        "description": "Replacement text (str_replace/insert)",
                    },
                    "insert_line": {
                        "type": "integer",
                        "description": "Line number for insertion (insert only)",
                    },
                    "file_text": {
                        "type": "string",
                        "description": "Content for new file (create only)",
                    },
                    "view_range": {
                        "type": "array",
                        "items": {"type": "integer"},
                        "description": "Line range [start, end] for viewing",
                    },
                },
                "required": ["command", "path"],
            },
        },
    },
]

cua_tools_new = [x for x in cua_tools if x["function"]["name"] not in ["screenshot"]]

tools_assisted = [
    {
        "type": "function",
        "function": {
            "name": "computer_control",
            "description": "Control mouse and keyboard actions using xdotool",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": [
                            "mouse_move",
                            "left_click",
                            "right_click",
                            "double_click",
                            "left_click_drag",
                            "type",
                            "key",
                            "cursor_position",
                        ],
                        "description": "Type of input action to perform",
                    },
                    "x": {
                        "type": "integer",
                        "description": "X coordinate for mouse actions. If only x is provided, it will be treated as coordinates of SoM element.",
                    },
                    "y": {
                        "type": "integer",
                        "description": "Y coordinate for mouse actions",
                    },
                    "text_content": {
                        "type": "string",
                        "description": "Text to type for keyboard input",
                    },
                    "key_name": {
                        "type": "string",
                        "description": "Keyboard key name for key press",
                    },
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "screenshot",
            "description": "Capture current screen image",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "bash",
            "description": "Execute bash commands in the system shell",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "description": "Bash command to execute",
                    }
                },
                "required": ["command"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "file_edit",
            "description": "Different File Related Operations such as viewing, creating, inserting etc",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {
                        "type": "string",
                        "enum": ["view", "create", "str_replace", "insert"],
                        "description": "Edit operation to perform",
                    },
                    "path": {
                        "type": "string",
                        "description": "Absolute path to target file/directory",
                    },
                    "old_str": {
                        "type": "string",
                        "description": "Text to replace (str_replace only)",
                    },
                    "new_str": {
                        "type": "string",
                        "description": "Replacement text (str_replace/insert)",
                    },
                    "insert_line": {
                        "type": "integer",
                        "description": "Line number for insertion (insert only)",
                    },
                    "file_text": {
                        "type": "string",
                        "description": "Content for new file (create only)",
                    },
                    "view_range": {
                        "type": "array",
                        "items": {"type": "integer"},
                        "description": "Line range [start, end] for viewing",
                    },
                },
                "required": ["command", "path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "view_original_image",
            "description": "Get a screenshot of the html image, that you need to replicate.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "view_html_preview",
            "description": "Get a preview of the index.html page as rendered in the browser. Your goal should be to make it as close to the original image as possible.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "view_python_preview",
            "description": "Get a preview of the graph generated by python file. Make sure python code saves your generated graph in generated.png. The tool will automatically run your script, and if the generated.png is found, it will be returned. Your goal should be to make it as close to the original image as possible.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "zoom_in",
            "description": "Zoom in on the current rendered html page.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "zoom_out",
            "description": "Zoom out on the current rendered html page.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_diff_patch",
            "description": "Get the diff patch of the repository.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "view_structure",
            "description": "View the structure of the current directory or a specified directory.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the directory to view the structure of.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_repository",
            "description": "Search for a string or regular expression in the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search string or regular expression.",
                    }
                },
                "required": ["query"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_file_outline",
            "description": "Retrieve the outline of a file, including symbols and their locations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_path": {
                        "type": "string",
                        "description": "The path to the file. If not provided the current active file is used.",
                    }
                },
                "required": ["file_path"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "file_name_search",
            "description": "Search for a file by its name. Can be used to find specific files in the repository.",
            "parameters": {
                "type": "object",
                "properties": {
                    "file_name": {
                        "type": "string",
                        "description": "The name of the file to search for.",
                    }
                },
                "required": ["file_name"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "test_sql",
            "description": "Test a SQL query against the database. Make sure the query is saved in sql_query.sql file.",
            "parameters": {},
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_relevant_schemas",
            "description": "Get relevant descriptions of the relevant database tables.",
            "parameters": {},
        },
    },
]

ASSISTED_TOOLS_MAPPING = {
    # 'swebench' : [tool for tool in tools_assisted if tool['function']['name'] in ['bash', 'file_edit', 'search_repository', 'file_name_search', 'view_structure', 'get_file_outline']],
    "swebench": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "search_repository",
            "file_name_search",
            "view_structure",
        ]
    ],
    # 'swebench' : [tool for tool in tools_assisted if tool['function']['name'] in ['bash', 'file_edit', 'view_structure']],
    "swtbench": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "search_repository",
            "file_name_search",
            "view_structure",
        ]
    ],
    "swebench_mm": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "search_repository",
            "file_name_search",
            "view_structure",
        ]
    ],
    "swebench-java": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "search_repository",
            "file_name_search",
            "view_structure",
        ]
    ],
    "intercode": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"] in ["bash", "file_edit", "screenshot"]
    ],
    "dsbench": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"] in ["bash", "file_edit", "screenshot"]
    ],
    "bird": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in ["bash", "file_edit", "screenshot", "test_sql", "get_relevant_schemas"]
    ],
    "minictx": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"] in ["bash", "file_edit", "screenshot"]
    ],
    "design2code": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "view_html_preview",
            "view_original_image",
            "zoom_in",
            "zoom_out",
        ]
    ],
    "humaneval": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"] in ["bash", "file_edit"]
    ],
    "chartmimic": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in ["bash", "file_edit", "view_python_preview", "view_original_image"]
    ],
    "resq": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"]
        in [
            "bash",
            "file_edit",
            "view_structure",
            "search_repository",
            "get_diff_patch",
        ]
    ],
    "canitedit": [
        tool
        for tool in tools_assisted
        if tool["function"]["name"] in ["bash", "file_edit"]
    ],
}
