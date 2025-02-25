import os, io, tarfile, glob, time

def setup(env, data_row):

    with tarfile.open(fileobj=io.BytesIO(), mode='w') as tar:
        for file_path in glob.glob(data_row['InputFigure']):
            tar.add(file_path, arcname='image.png')
    tar_stream = io.BytesIO(tar.fileobj.getvalue())
    tar_stream.seek(0)
    env.container.put_archive('/home/devuser/evaluation/', tar_stream)

    env.run_command(f'touch /home/devuser/evaluation/graph.py')


    env.run_command('code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation', wait=10)


    while True:
        env.run_command('wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk \'{print $1}\') -e 0,0,0,1920,1080', wait=5)
        window_info = env.run_command('wmctrl -lG | grep "Code - OSS"')[0]
        # Get window geometry 
        # Check if window dimensions match target
        if '1920 1080' in window_info:
            break
        print('Trying to resize window', window_info)
        time.sleep(5)
    
    time.sleep(5)
    # Let's load the image (input figure)
    som_infos = env.get_som_image(env.render())
    input_figure_id = next(k for k, v in som_infos[0][3].items() if 'image.png' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][input_figure_id][0]} {som_infos[0][1][input_figure_id][1]} click 1 click 1')
    
    # Now let's load the notebook
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    solution_id = next(k for k, v in som_infos[0][3].items() if 'Solution.ipynb' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click 1 click 1')
    
    # Now let's load the graph.py file
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    graph_id = next(k for k, v in som_infos[0][3].items() if 'graph.py' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][graph_id][0]} {som_infos[0][1][graph_id][1]} click 1 click 1')
