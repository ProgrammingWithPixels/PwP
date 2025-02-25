import tarfile, io, os, tempfile, docker
import shutil
def eval(env, data_row):
    # Setup Docker client and ensure image exists
    client = docker.from_env()
    try:
        client.images.get('p2c_dsbench_eval')
    except docker.errors.ImageNotFound:
        # Build image from Dockerfile
        dockerfile_path = os.path.join(os.path.dirname(__file__), '../eval.Dockerfile')
        try:
            # Use low-level API to capture build logs
            build_output = client.api.build(
                path=os.path.dirname(dockerfile_path),
                dockerfile=os.path.basename(dockerfile_path),
                tag='p2c_dsbench_eval',
                decode=True
            )
            # Print all build logs
            for chunk in build_output:
                if 'stream' in chunk:
                    print(chunk['stream'], end='')
                elif 'error' in chunk:
                    print(f"Error: {chunk['error']}", end='')
                elif 'errorDetail' in chunk:
                    print(f"Error Detail: {chunk['errorDetail'].get('message', '')}", end='')
                else:
                    print(chunk, end='')
        except Exception as e:
            print(f"Docker build failed: {str(e)}")
            raise
    # Load the submission.csv file from /home/devuser/evaluation/
    submission_file = os.path.join("/home/devuser/evaluation", "submission.csv")
    # Load the file from container
    # Create a temporary file to store the submission.csv content
    with tempfile.NamedTemporaryFile(mode='w+b', delete=False) as temp_file:
        # Get the content of submission.csv from the container
        try:
            stream, _ = env.container.get_archive(submission_file)
        except Exception as e:
            # print(f"Error getting submission.csv: {e}")
            return 0
        # Extract the content from the tar stream
        with tarfile.open(fileobj=io.BytesIO(b''.join(stream)), mode='r|*') as tar:
            for member in tar:
                if member.name == 'submission.csv':
                    content = tar.extractfile(member).read()
                    temp_file.write(content)
                    break
        
        # Return to the beginning of the file for reading
        temp_file.seek(0)
        
        # Store the temporary file path for later use
        temp_submission_path = temp_file.name
    gold_path = os.path.join(os.path.dirname(__file__), f"../DSBench/data_modeling/data/answers/{data_row['name']}/test_answer.csv")
    import random
    # Choose a random number to ensure results directory is unique
    random_number = random.randint(0, 1000000)
    save_path = f'results_{random_number}'
    os.makedirs(os.path.join(os.path.dirname(__file__), save_path, data_row['name']), exist_ok=True)
    
    # Instead of running directly, execute in Docker container
    try:
        container = client.containers.run(
            'p2c_dsbench_eval',
            command=[
                'python', 
                f'DSBench/data_modeling/evaluation/{data_row["name"]}_eval.py',
                '--answer_file', '/data/answer.csv',
                '--predict_file', '/data/submission.csv',
                '--path', '/data/results',
                '--name', data_row['name']
            ],
            volumes={
                gold_path: {'bind': '/data/answer.csv', 'mode': 'ro'},
                temp_submission_path: {'bind': '/data/submission.csv', 'mode': 'ro'},
                os.path.abspath(save_path): {'bind': '/data/results', 'mode': 'rw'}
            },
            detach=False,
            remove=True,
            working_dir='/workspace'
        )
        
        # Read the results file
        results_file = os.path.join(save_path, data_row['name'], "result.txt")
        if not os.path.exists(results_file): 
            print(f"Results file not found: {results_file}")
            shutil.rmtree(save_path)
            return 0
        with open(results_file, 'r') as f:
            result = f.read()
        shutil.rmtree(save_path)
        # Delete the results file
        os.remove(results_file)
        return float(result)
        
    except Exception as e:
        shutil.rmtree(save_path)
        print(f"Error running evaluation: {e}")
        return 0
    finally:
        # Cleanup temporary submission file
        if os.path.exists(temp_submission_path):
            os.unlink(temp_submission_path)