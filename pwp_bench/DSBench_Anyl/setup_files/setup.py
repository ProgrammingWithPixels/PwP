import os, io, tarfile, glob, time

def setup(env, data_row):


    # Now copy stuff from "~/DSBench/data_modeling/data$/data_resplit/{row['name']}/* /home/devuser/evaluation"
    # file_to_copy = f"/home/pranj/DSBench/data_modeling/data/data_resplit/{data_row['name']}/*"
    # file_to_copy = os.path.join(os.path.dirname(__file__), f"../DSBench/data_modeling/data/data_resplit/{data_row['name']}/*")
    file_to_copy = os.path.join(os.path.dirname(__file__), f"../DSBench/processed_data/{data_row['id']}/*")
    
    # breakpoint()
    for file_path in glob.glob(file_to_copy):
        with tarfile.open(fileobj=io.BytesIO(), mode='w') as tar:
            for file_path in glob.glob(file_to_copy):
                tar.add(file_path, arcname=os.path.basename(file_path))
            tar_stream = io.BytesIO(tar.fileobj.getvalue())
        tar_stream.seek(0)
        env.container.put_archive('/home/devuser/evaluation', tar_stream)
    # breakpoint()

    time.sleep(5)
    env.run_command(f'touch /home/devuser/evaluation/sol.txt', root=False)
    # breakpoint()
    env.run_command(f'touch /home/devuser/evaluation/solution.py', root=False)
    
    # Now let's load the notebook
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    solution_id = next(k for k, v in som_infos[0][3].items() if 'Solution.ipynb' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click 1 click 1')
    
    # Now let's load the graph.py file
    time.sleep(5)
    som_infos = env.get_som_image(env.render())
    graph_id = next(k for k, v in som_infos[0][3].items() if 'solution.py' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][graph_id][0]} {som_infos[0][1][graph_id][1]} click 1 click 1')