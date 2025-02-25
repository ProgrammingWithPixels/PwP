import shlex
import subprocess


def get_command(command):
    if "mousemove" not in command:
        return command
    """
    Executes an xdotool command after scaling coordinates in any mousemove subcommands.

    In xdotool, you can chain several subcommands (like "mousemove", "click", etc.) in one call.
    For the "mousemove" subcommand the syntax is:
    
        xdotool mousemove [options] <x> <y>

    where the coordinate pair is always the last two numeric arguments of the mousemove subcommand.
    For example:
      - "xdotool mousemove 395 64 click 1"
          -> The mousemove part is "mousemove 395 64" (the coordinates are the first two numeric tokens)
      - "xdotool mousemove --window 12345 300 400 click 1"
          -> The mousemove part is "mousemove --window 12345 300 400"
             and the coordinates are the last two numeric tokens ("300" and "400").

    This function:
      1. Uses shlex.split() to properly tokenize the command.
      2. Splits the tokens (after the initial "xdotool") into subcommands by checking
         against a set of known xdotool subcommands.
      3. For every subcommand named "mousemove", it locates its coordinate pair as the last
         two numeric tokens in its argument list, scales them, and updates them.
      4. Reassembles the command and executes it.
    """

    # Tokenize the full command (this handles quotes and extra spaces correctly)
    tokens = shlex.split(command)
    if not tokens:
        return

    # We assume the command begins with "xdotool"
    if tokens[0] != "xdotool":
        print("Command does not start with 'xdotool'")
        return

    # A set of known xdotool subcommands.
    # (Extend this set as needed for your use cases.)
    known_subcommands = {
        "mousemove",
        "click",
        "keydown",
        "keyup",
        "key",
        "type",
        "windowmove",
        "windowfocus",
        "windowsize",
        "search",
        "getmouselocation",
        "setmouselocation",
    }

    # We'll parse the tokens (after "xdotool") into a list of subcommand dicts.
    # Each dict has:
    #   - "cmd": the subcommand name (e.g. "mousemove")
    #   - "args": a list of arguments for that subcommand
    subcommands = []
    current_subcmd = None

    # Process tokens[1:] (skipping the initial "xdotool")
    for token in tokens[1:]:
        if token in known_subcommands:
            # Found a new subcommand token; save the previous one (if any)
            if current_subcmd is not None:
                subcommands.append(current_subcmd)
            # Start a new subcommand with this token
            current_subcmd = {"cmd": token, "args": []}
        else:
            # Otherwise, add the token to the current subcommand’s arguments.
            # (If no current subcommand exists, we ignore the token.)
            if current_subcmd is not None:
                current_subcmd["args"].append(token)
            else:
                # In case tokens appear before any known subcommand,
                # you could choose to log or ignore them.
                continue

    # Append the last subcommand, if any.
    if current_subcmd is not None:
        subcommands.append(current_subcmd)

    # Process each subcommand.
    for subcmd in subcommands:
        if subcmd["cmd"] == "mousemove":
            # For mousemove, we want to scale the coordinate pair.
            # According to xdotool usage, the coordinate pair is the last two numeric tokens
            # in the argument list.
            numeric_indices = []  # indices of tokens that can be converted to int

            for i, arg in enumerate(subcmd["args"]):
                try:
                    # Attempt conversion to integer.
                    # (This will skip floats and non-numeric strings.)
                    _ = int(arg)
                    numeric_indices.append(i)
                except ValueError:
                    continue

            # We need at least two numeric tokens to have an (x, y) pair.
            if len(numeric_indices) >= 2:
                # The coordinates are the last two numeric tokens.
                x_idx = numeric_indices[-2]
                y_idx = numeric_indices[-1]

                try:
                    orig_x = int(subcmd["args"][x_idx])
                    orig_y = int(subcmd["args"][y_idx])
                except ValueError:
                    # This should not happen because we already converted them.
                    continue

                # Apply the scaling factors.
                scaled_x = int(orig_x * 1.5)
                scaled_y = int(orig_y * 1.35)

                # Update the argument list with the scaled coordinates.
                subcmd["args"][x_idx] = str(scaled_x)
                subcmd["args"][y_idx] = str(scaled_y)
                # (You could also log the change if needed.)

    # Reassemble the full command.
    # Start with "xdotool", then for each subcommand, append its command token and its arguments.
    new_tokens = ["xdotool"]
    for subcmd in subcommands:
        new_tokens.append(subcmd["cmd"])
        new_tokens.extend(subcmd["args"])
    new_command = " ".join(new_tokens)
    return new_command


def computer_control(env, command):
    new_command = get_command(command)
    print("Executing command:", new_command)

    # Execute the command.
    # Using shell=True since xdotool commands are typically run in the shell.
    out, code = env.run_command(new_command)
    if code == 0:
        return out
    else:
        return "Error: " + out


FUNCTIONS = {
    "computer_control": computer_control,
}

if __name__ == "__main__":
    print(get_command("xdotool mousemove 395 64 click 1"))
    print(get_command("xdotool mousemove --window 12345 300 400 click 1"))
    print(get_command('xdotool type "debug console focus"'))
    print(
        get_command(
            "xdotool key Return && xdotool mousemove --delay 12 100 200 && xdotool mousemove --repeat 4 10 15"
        )
    )
