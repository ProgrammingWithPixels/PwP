import os, io, tarfile, glob, time, tempfile

def setup(env, data_row):
    # Create a temp file for data_row['before'] and copy inside the container

    temp_file = tempfile.NamedTemporaryFile(delete=False)
    temp_file.write(data_row['before'].encode('utf-8'))
    temp_file.flush()
    temp_file.seek(0)
    with tarfile.open(fileobj=io.BytesIO(), mode='w') as tar:
        tar.add(temp_file.name, arcname=os.path.basename(temp_file.name))
        tar_stream = io.BytesIO(tar.fileobj.getvalue())
    tar_stream.seek(0)
    # breakpoint()
    env.container.put_archive('/home/devuser/evaluation', tar_stream)
    
    env.run_command(f'mv /home/devuser/evaluation/{os.path.basename(temp_file.name)} /home/devuser/evaluation/main.py')

    
    time.sleep(10)
    som_infos = env.get_som_image(env.render())

    
    # Now double click on image.png
    solution_id = next(k for k, v in som_infos[0][3].items() if 'main.py' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')

    env.run_command('pip install vllm z3-solver scikit-learn numpy autograd')