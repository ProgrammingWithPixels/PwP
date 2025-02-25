import os, io, tarfile, glob, time

def setup(env, data_row):
    # Clone github repository data_row['repo_url'] to /home/devuser/evaluation
    env.run_command(f'git clone {data_row["repo_url"]} /home/devuser/evaluation')
    env.run_command(f'git checkout {data_row["base_commit"]}', workdir = '/home/devuser/evaluation')

    env.run_command(f'code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation', wait = 10)
    # Keep trying to expand window until successful
    while True:
        env.run_command('wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk \'{print $1}\') -e 0,0,0,1920,1080', wait=5)
        window_info = env.run_command('wmctrl -lG | grep "Code - OSS"')[0]
        # Get window geometry 
        # Check if window dimensions match target
        if '1920 1080' in window_info:
            break
        time.sleep(5)
    # breakpoint()
    # close the welcome page
    env.run_command('xdotool key ctrl+w', wait = 1)

    som_infos = env.get_som_image(env.render())

    # Now double click on README.md
    try:
        solution_id = next(k for k, v in som_infos[0][3].items() if 'README.md' in v)
    except StopIteration:
        # breakpoint()
        try:
            solution_id = next(k for k, v in som_infos[0][3].items() if 'README' in v)
        except StopIteration:
            pass
            # breakpoint()
            # raise Exception('No solution found')
            return
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')

    
