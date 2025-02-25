#!/usr/bin/env python
"""
PwP Quickstart Example

This script demonstrates the basic functionalities of the Programming with Pixels (PwP) package.
It shows how to create an environment, capture screenshots, execute commands, and use benchmarks.

Run this script to get a quick overview of PwP capabilities.
"""

import time
import os
from PIL import Image
from pwp.env import PwP
from pwp.bench import PwPBench

def quickstart_environment():
    """
    Demonstrates basic environment creation and interaction.
    """
    print("\n=== Basic Environment Interaction ===\n")
    
    # Create a basic environment with the default image
    print("Creating environment...")
    env = PwP(image_name='pwp_env')
    
    # Take a screenshot
    print("Capturing screenshot...")
    screenshot = env.render()
    
    # Save the screenshot
    os.makedirs("output", exist_ok=True)
    screenshot_path = "output/screenshot.png"
    screenshot.save(screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")
    
    # Run a simple command
    print("\nExecuting commands:")
    result = env.step("echo 'Hello from PwP!'")
    print(f"Command output: {result['output']}")
    
    # Run a more complex command
    result = env.step("ls -la /home/devuser")
    print(f"Directory listing of /home/devuser:\n{result['output']}")
    
    # Create a simple file
    example_file_content = """
    print("Hello from PwP!")

    answer = 42
    print(f"The answer is {answer}")
    """
    env.step("mkdir -p /home/devuser/example")
    env.file_write("/home/devuser/example/hello.py", example_file_content)
    
    # Execute the file
    print("\nRunning a Python script:")
    result = env.step("python /home/devuser/example/hello.py")
    print(f"Script output: {result['output']}")
    
    # Clean up
    print("\nCleaning up environment...")
    env.stop()
    env.remove()
    print("Environment removed")
    
    return True

def quickstart_benchmark():
    """
    Demonstrates basic benchmark usage.
    """
    print("\n=== Benchmark Usage ===\n")
    
    # List available benchmarks
    from pwp.bench.benchmark import task_configs
    print("Available benchmarks:")
    for task in task_configs.keys():
        print(f"  - {task}")
    
    # Create a benchmark instance (HumanEval is a good starting point)
    try:
        print("\nLoading humaneval benchmark...")
        bench = PwPBench('humaneval')
        
        # Get the dataset
        dataset = bench.get_dataset()
        print(f"Loaded {len(dataset)} tasks")
        
        # Print information about the first task
        print("\nFirst task information:")
        task = dataset[0]
        print(f"Task ID: {task.get('task_id', 'Unknown')}")
        print(f"Prompt: {task.get('prompt', 'No prompt')[:100]}...")
        
        # Optionally, create an environment for this task
        print("\nCreating environment for the first task...")
        task_env = bench.get_env(task)
        
        # Take a screenshot of the task environment
        screenshot = task_env.render()
        screenshot_path = "output/benchmark_screenshot.png"
        screenshot.save(screenshot_path)
        print(f"Task screenshot saved to {screenshot_path}")
        
        # Clean up
        print("\nCleaning up benchmark environment...")
        del task_env  # This triggers the __del__ method which cleans up
        print("Benchmark environment removed")
        
    except Exception as e:
        print(f"Error loading benchmark: {e}")
        print("Benchmark demonstration skipped. Make sure you have downloaded the benchmark data.")
        print("You can download it by running the first_time.sh script in the benchmark directory.")
    
    return True

def quickstart_advanced():
    """
    Demonstrates some advanced features of PwP.
    """
    print("\n=== Advanced Features ===\n")
    
    # Create an environment with VNC enabled
    print("Creating environment with VNC...")
    env = PwP(image_name='pwp_env', enable_vnc=True)
    
    # Get VNC connection info
    vnc_info = env.get_vnc_connection_info()
    print("\nVNC Connection Information:")
    print(f"VNC Address: {vnc_info['vnc_address']}")
    print(f"noVNC URL: {vnc_info['novnc_url']}")
    print(f"VNC Password: {vnc_info['password']}")
    print("\nYou can connect to this environment using a VNC client or web browser")
    
    # Environment checkpointing
    print("\n=== Demonstrating Checkpointing ===")
    env.step("mkdir -p /home/devuser/checkpoint_example")
    env.step("echo 'This file was created before the checkpoint' > /home/devuser/checkpoint_example/before.txt")

    # Create a checkpoint
    checkpoint_id = env.create_checkpoint()
    print(f"Created checkpoint with ID: {checkpoint_id}")

    # Create a file after checkpoint
    env.step("echo 'This file was created after the checkpoint' > /home/devuser/checkpoint_example/after.txt")

    # Check the directory contents
    result = env.step("ls -la /home/devuser/checkpoint_example/")
    print("Directory contents after adding second file:")
    print(result['output'])
    
    # Clean up
    print("\nCleaning up environment...")
    env.stop()
    env.remove()
    print("Environment removed")
    
    return True

if __name__ == "__main__":
    print("=== PwP Quickstart ===")
    print("This script will demonstrate the basic functionality of the PwP package.")
    print("It will create Docker containers and interact with them.")
    
    # Check for Docker
    import subprocess
    try:
        subprocess.check_call("docker --version", shell=True, stdout=subprocess.PIPE)
    except:
        print("ERROR: Docker not found. Please install Docker to use PwP.")
        exit(1)
    
    # Run the demos
    try:
        quickstart_environment()
        quickstart_benchmark()
        # Uncomment the next line to run the advanced demo
        # quickstart_advanced()
        
        print("\n=== Quickstart Complete ===")
        print("You've successfully run the PwP quickstart demo!")
        print("For more information, visit the documentation or explore the examples directory.")
    except Exception as e:
        print(f"Error during quickstart: {e}")
        print("Please make sure you have the necessary dependencies installed.") 