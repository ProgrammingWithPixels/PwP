import time

def setup_standard(env, data_row = None):
    # Create the evaluation directory
    result = env.step('mkdir -p /home/devuser/evaluation')
    if result['exit_code'] != 0:
        raise RuntimeError("Failed to create /home/devuser/evaluation directory.")

    # Launch VS Code without sandbox and GPU (to prevent security pop-ups)
    env.step('code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation')

    # Wait for VS Code process to start
    if not env.is_process_running('code'):
        raise RuntimeError("VS Code did not start successfully.")

    # Wait for VS Code window to appear
    if not env.is_window_present("Code - OSS"):
        raise RuntimeError("VS Code window did not appear.")
    time.sleep(5)
    resize_command = 'wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk \'{print $1}\') -e 0,0,0,1920,1080'
    # env.step(['bash', '-c', resize_command])
    env.step(resize_command)

def setup_document_with_text(env, data_row):
    setup_standard(env, data_row)
    # Create a document with occurrences of 'text'
    env.step('echo "This is some sample text. More text here." > /home/devuser/evaluation/document.txt')

    # Open the document
    time.sleep(1)
    som_infos = env.get_som_image(env.render())
    # breakpoint()
    solution_id = next(k for k, v in som_infos[0][3].items() if 'document.txt' in v)
    env.run_command(f'xdotool mousemove {som_infos[0][1][solution_id][0]} {som_infos[0][1][solution_id][1]} click --repeat 2 1')
    # breakpoint()



def setup_project_directory(env, data_row):
    env.step('mkdir -p /home/devuser/project')
    env.step('touch /home/devuser/project/main.py')

    setup_standard(env, start_folder = '/home/devuser/project')

def setup_background_image(env, data_row):
    setup_standard(env, data_row)
    # Place a background image in the Downloads folder
    env.step('mkdir -p /home/devuser/evaluation')
    # For testing purposes, create a dummy image file, by downloading a random image from the internet
    env.step('wget -O /home/devuser/evaluation/background.jpg https://picsum.photos/1920/1080')

def setup_code_file(env, data_row):
    setup_standard(env, data_row)
    # Create a code file with sample lines
    env.step('echo -e "line1\\nline2\\nline3\\nline4\\nline5\\nline6\\nline7\\nline8\\nline9\\nline10\\nline11" > /home/devuser/evaluation/code.py')

def setup_python_file_with_numpy(env, data_row):
    setup_standard(env, data_row)
    # Create a Python file with NumPy arrays
    env.step('echo -e "import numpy as np\\na = np.array([1, 2, 3])\\nb = np.array([[1, 2], [3, 4]])" > /home/devuser/evaluation/numpy_example.py')
    # Ensure the Python extension is installed
    env.step('code --install-extension ms-python.python')
