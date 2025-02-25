import time
import json
import os


def setup(env, data_row):

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
    # breakpoint()

    # som_infos = env.get_som_image(env.render())
    # input_figure_id = next(k for k, v in som_infos[0][3].items() if data_row['ExampleID']+'.png' in v)
    # env.run_command(f'xdotool mousemove {som_infos[0][1][input_figure_id][0]} {som_infos[0][1][input_figure_id][1]} click 1 click 1')

    # We also need to copy the table information.
    db_id = data_row['db_id']
    # Read dev_tables.json using regular Python
    tables_data = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'minidev', 'MINIDEV', 'dev_tables.json')))
    table_names = next(item['table_names_original'] for item in tables_data if item['db_id'] == db_id)
    for table_name in table_names:
        env.copy_to_container(
            f'{os.path.dirname(__file__)}/../minidev/MINIDEV/dev_databases/{db_id}/database_description/{table_name}.csv',
            f'/home/devuser/evaluation/{table_name}.csv'
        )
    
    # Now let's load the notebook
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    solution_id = next(k for k, v in som_infos[0][3].items() if 'Scratchpad.ipynb' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click 1 click 1')
    
    # Now let's load the main.py file
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    graph_id = next(k for k, v in som_infos[0][3].items() if 'main.py' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][graph_id][0]} {som_infos[0][1][graph_id][1]} click 1 click 1')

    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    graph_id = next(k for k, v in som_infos[0][3].items() if 'sql_query.sql' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][graph_id][0]} {som_infos[0][1][graph_id][1]} click 1 click 1')