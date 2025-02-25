import tarfile, io, tempfile
import docker
import os
def eval(env, data_row):
    client = docker.from_env()
    
    # Check if image exists
    try:
        client.images.get('p2c_humaneval_eval')
    except docker.errors.ImageNotFound:
        # Build image from Dockerfile
        dockerfile_path = os.path.join(os.path.dirname(__file__), '../eval.Dockerfile')
        client.images.build(path=os.path.dirname(dockerfile_path), 
                          dockerfile=os.path.basename(dockerfile_path),
                          tag='p2c_humaneval_eval')

    text_to_add = "\n\n" + data_row["test"] + "\n" + f"check({data_row['entry_point']})"
    # Read the file as well
    submission_file = "/home/devuser/evaluation/program.py"

    with tempfile.NamedTemporaryFile(mode='w+b', delete=False) as temp_file:
            # Get the content of index.html from the container
        try:
            stream, _ = env.container.get_archive(submission_file)
        except Exception as e:
            print(f"Error getting index.html: {e}")
            ...
        # Extract the content from the tar stream
        with tarfile.open(fileobj=io.BytesIO(b''.join(stream)), mode='r|*') as tar:
            for member in tar:
                if member.name == 'program.py':
                    content = tar.extractfile(member).read()
                    temp_file.write(content)
                    break
    file_output = content.decode()
    # return file_output, data_row['prompt']
    if not file_output.strip().startswith(data_row['prompt'].strip()):
        print('Prompt not found in the file, LLM might have cheated.')
        return False

    # Now create the program
    code = file_output + '\n' + text_to_add
    # return code
    # Now evaluate the code

    # Instead of executing in current context, run in container
    code = file_output + '\n' + text_to_add
    
    # Create temporary file with the code
    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as temp_file:
        temp_file.write(code)
        temp_file.flush()
        
    try:
        # Run container with the code file mounted
        container = client.containers.run(
            'p2c_humaneval_eval',
            command=['python', '/code/program.py'],
            volumes={temp_file.name: {'bind': '/code/program.py', 'mode': 'ro'}},
            detach=False,
            remove=True,
            stdout=True,
            stderr=True
        )
        
        # Parse container output
        output = container.decode('utf-8')
        if 'AssertionError' in output or 'Exception' in output:
            return False, output
        try:
            os.unlink(temp_file.name)
        except Exception as e:
            print(f"Error deleting temp file: {e}")
        return True
        
    except Exception as e:
        # Stop the container
        return False, str(e)