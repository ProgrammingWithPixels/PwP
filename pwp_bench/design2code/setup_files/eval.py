import tarfile, io, tempfile, os, sys

def eval(env, data_row):
    # Get the index.html file from the container
    submission_file = os.path.join("/home/devuser/evaluation", "index.html")
    # Load the file from container
    # Create a temporary file to store the index.html content
    with tempfile.NamedTemporaryFile(mode='w+b', delete=False, suffix='.html') as temp_file:
        # Get the content of index.html from the container
        try:
            stream, _ = env.container.get_archive(submission_file)
        except Exception as e:
            # print(f"Error getting index.html: {e}")
            return 0
        # Extract the content from the tar stream
        with tarfile.open(fileobj=io.BytesIO(b''.join(stream)), mode='r|*') as tar:
            for member in tar:
                if member.name == 'index.html':
                    content = tar.extractfile(member).read()
                    temp_file.write(content)
                    break
        
        # Return to the beginning of the file for reading
        temp_file.seek(0)
        
        # Store the temporary file path for later use
        temp_submission_path = temp_file.name

    # Now let's store current directory
    current_dir = os.getcwd()
    # Now let's change the directory to __file__/../Design2Code
    # os.chdir(os.path.join(os.path.dirname(__file__), "..", "Design2Code"))
    os.chdir(os.path.join(os.path.dirname(__file__), "..", "Design2Code", "Design2Code"))
    sys.path.append(os.path.join(os.path.dirname(__file__), "..", "Design2Code"))
    # breakpoint()
    from Design2Code.metrics.visual_score import visual_eval_v3_multi
    image_idx = data_row["image_path"].split("/")[-1].split(".")[0]#.split("_")[1]
    try:
        score = visual_eval_v3_multi([[temp_submission_path], f"testset_final/{image_idx}.html"])
    except Exception as e:
        print(f"Error in visual_eval_v3_multi: {e}")
        os.chdir(current_dir)
        return 0
    # Now let's change the directory to current_dir
    os.chdir(current_dir)
    return score[0]

