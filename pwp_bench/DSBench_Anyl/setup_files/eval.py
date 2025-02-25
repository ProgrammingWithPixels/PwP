import tarfile, io, os, tempfile

def eval(env, data_row):
    # Load the submission.csv file from /home/devuser/evaluation/
    submission_file = os.path.join("/home/devuser/evaluation", "sol.txt")
    # Load the file from container
    # Create a temporary file to store the submission.csv content
    with tempfile.NamedTemporaryFile(mode='w+b', delete=False) as temp_file:
        # Get the content of submission.csv from the container
        env.copy_from_container(submission_file, temp_file.name)
        
    # Read the file and check if equal to data_row['answers']
    with open(temp_file.name, 'r') as f:
        submission = f.read()
    print('Answer by model:', submission)
    print('Answer by gold:', data_row['answers'])
    try:
        if submission.lower().strip() == data_row['answers'].lower().strip():
            return 1
        else:
            return 0
    except Exception as e:
        print(f"Error: {e}")
        return 0