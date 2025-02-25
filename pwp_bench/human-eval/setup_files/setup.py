import time

def setup(env, data_row):
    program_content = data_row["prompt"]
    write_command = f'cat <<EOF > /home/devuser/evaluation/program.py\n{program_content}\nEOF'

    env.run_command(write_command)

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

    try:    
        som_infos = env.get_som_image(env.render())
        solution_id = next(k for k, v in som_infos[0][3].items() if 'program.py' in v)
        env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')
    except Exception as e:
        print(e)


