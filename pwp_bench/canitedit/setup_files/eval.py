def eval(env, data_row):
    # Copy a file (main.py) from container to a temp file
    import shutil
    import tempfile
    import os

    # Create a temporary file
    temp_fd, temp_path = tempfile.mkstemp()
    os.close(temp_fd)
    try:
        # Copy main.py from container to temp file
        container_file = os.path.join('/home/devuser/evaluation', 'main.py')
        env.copy_from_container(container_file, temp_path)
        # shutil.copy2(container_file, temp_path)
    except Exception as e:
        return False
    
    code = open(temp_path).read()
    code = code + '\n\n' + data_row['tests']
    # write the code to the file
    with open(temp_path, 'w') as f:
        f.write(code)
    # transfer the file back to container in /workspace/
    try:
        workspace_path = '/workspace/main.py'
        env.copy_to_container(temp_path, workspace_path)
        os.remove(temp_path)  # Clean up the temporary file
    except Exception as e:
        return False

    # Now let's run the code
    output, _ = env.run_command('cd /workspace && python3 main.py')
    # Check if the output is an exception. For correct code, output should be empty.
    if output:
        return False

    # Return the result
    return True