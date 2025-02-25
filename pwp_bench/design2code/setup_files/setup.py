import os, io, tarfile, glob, time

def setup(env, data_row):
    with tarfile.open(fileobj=io.BytesIO(), mode='w') as tar:
        for file_path in glob.glob(os.path.join(os.path.dirname(__file__), '..', data_row['image_path'])):
            tar.add(file_path, arcname=os.path.basename(file_path))
        tar_stream = io.BytesIO(tar.fileobj.getvalue())
    tar_stream.seek(0)
    env.container.put_archive('/home/devuser/evaluation', tar_stream)
    env.run_command(f'mv /home/devuser/evaluation/{os.path.split(data_row["image_path"])[-1]} /home/devuser/evaluation/image.png')

    
    # Now let's load the notebook
    time.sleep(10)
    som_infos = env.get_som_image(env.render())

    return

    
    # Now double click on image.png
    solution_id = next(k for k, v in som_infos[0][3].items() if 'image.png' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')

    solution_id = next(k for k, v in som_infos[0][3].items() if 'index.html' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')

    # Open the browser preview using Live Preview: Show Preview (Internal Browser)
    env.run_command('xdotool key ctrl+shift+p', wait=1)
    env.run_command('xdotool type "Live Preview: Show Preview (Internal Browser)"', wait=1)
    env.run_command('xdotool key Return', wait=5)

    env.run_command('xdotool key ctrl+b', wait=1)

    env.run_command('xdotool click 1', wait=1)

    # TODO: Might want to have image.png pre-opened in the editor
