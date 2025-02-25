"""
Demo script for the PWP package

This script demonstrates how to use the PWP environment and benchmarks.
"""

import time
from pwp.env import PwP
from pwp.bench import PwPBench

def demo_env():
    """
    Demo of using the PwP environment
    """
    # Create an environment
    env = PwP(image_name='pwp_env')
    
    # Take a screenshot
    env.reset()
    observation = env.render()
    
    # Run a command
    env.step("xdotool mousemove 100 100 click 1")
    time.sleep(2)
    
    # Take another screenshot
    observation = env.render()
    
    # Clean up
    env.stop()
    env.remove()
    
def demo_bench():
    """
    Demo of using the PwP benchmark
    """
    # Create a benchmark
    bench = PwPBench(task_name='humaneval')
    
    # Get the dataset
    dataset = bench.get_dataset()
    
    # Print the first example
    if dataset and len(dataset) > 0:
        print("First benchmark example:", dataset[0])
    else:
        print("No benchmark examples found.")

    task_env = bench.get_env(dataset[0])
    observation = task_env.render()
    # Optionally save the observation to a file
    task_env.step("xdotool mousemove 100 100 click 1")
    time.sleep(2)
    observation = task_env.render()
    observation.save('demo_observation.png')
    

    task_env.stop()
    task_env.remove()

if __name__ == "__main__":
    print("Running PWP Environment Demo...")
    demo_env()
    
    print("\nRunning PWP Benchmark Demo...")
    demo_bench() 