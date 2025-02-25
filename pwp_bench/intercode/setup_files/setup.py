import os, io, tarfile, glob, time

def setup(env, data_row):
    env.run_command(f'code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation/ctf/{data_row["task_id"]}')
    time.sleep(10)
    env.run_command('wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk \'{print $1}\') -e 0,0,0,1920,1080')


    if 'setup' in data_row and data_row['setup'] is not None:
        # Change the working directory to the task_id folder
        env.run_command(data_row['setup'], workdir = '/home/devuser/evaluation/ctf/' + data_row['task_id'])

    env.run_command('xdotool key ctrl+w')