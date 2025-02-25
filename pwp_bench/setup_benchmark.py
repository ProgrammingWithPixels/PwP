#!/usr/bin/env python
"""
PwP Benchmark Setup Script

This script helps users download and set up specific benchmarks for PwP.
It provides a command-line interface to install benchmark data and dependencies.

Usage:
    python setup_benchmark.py --list         # List available benchmarks
    python setup_benchmark.py --setup <n>  # Set up a specific benchmark
    python setup_benchmark.py --verify <n>   # Verify a specific benchmark
"""

import os
import sys
import argparse
import subprocess
import json
from pathlib import Path

# Import PwP benchmark information
try:
    from pwp.bench.benchmark import task_configs
except ImportError:
    print("ERROR: PwP package not found. Make sure you have installed PwP.")
    print("You can install it with: pip install -e .")
    sys.exit(1)

def list_benchmarks():
    """List all available benchmarks with descriptions."""
    print("\n=== Available PwP Benchmarks ===\n")
    
    # Define descriptions for each benchmark
    descriptions = {
        'humaneval': "Python coding problems for function completion",
        'swebench': "Software engineering tasks from real GitHub repositories",
        'swebench-java': "Java software engineering tasks",
        'dsbench': "Data science tasks involving data analysis and visualization",
        'chartmimic': "Recreating charts from visual references",
        'intercode': "Interactive coding tasks in bash, SQL, and CTF challenges",
        'design2code': "Converting visual designs to HTML/CSS code",
        'canitedit': "Code editing tasks with specific requirements",
        'resq': "Reasoning about SQL queries for database tasks",
        'minictx': "Minimal context understanding for code comprehension",
        'bird': "Business intelligence dashboard reporting tasks",
        'vscode': "VSCode-specific tasks and operations",
        'swebench_mm': "Multimodal software engineering tasks",
        'nocode': "Tasks for interacting with no-code tools and platforms"
    }
    
    # Calculate maximum width for formatting
    max_width = max(len(name) for name in task_configs.keys())
    
    # Print each benchmark with its description
    for name in sorted(task_configs.keys()):
        desc = descriptions.get(name, "No description available")
        print(f"{name.ljust(max_width + 2)} - {desc}")
    
    print("\nTo set up a benchmark:")
    print("  python setup_benchmark.py --setup <benchmark_name>")
    print("\nTo verify a benchmark:")
    print("  python setup_benchmark.py --verify <benchmark_name>")

def setup_benchmark(benchmark_name):
    """Set up a specific benchmark by downloading its data and dependencies."""
    if benchmark_name not in task_configs:
        print(f"ERROR: Benchmark '{benchmark_name}' not found.")
        print("Use --list to see available benchmarks.")
        return False
    
    print(f"\n=== Setting up {benchmark_name} benchmark ===\n")
    
    # Get benchmark directory
    benchmark_path = task_configs[benchmark_name]['docker_path']
    benchmark_dir = Path(benchmark_path)
    
    # Check if first_time.sh exists
    first_time_script = benchmark_dir / 'first_time.sh'
    if first_time_script.exists():
        print(f"Running first-time setup script for {benchmark_name}...")
        try:
            # Make sure the script is executable
            os.chmod(first_time_script, 0o755)
            # Run the first_time.sh script
            subprocess.run(f"cd {benchmark_dir} && ./first_time.sh", shell=True, check=True)
            print(f"\n✅ {benchmark_name} benchmark setup completed successfully!")
        except subprocess.CalledProcessError as e:
            print(f"\n❌ Error setting up {benchmark_name}: {e}")
            return False
    else:
        # If no first_time.sh script, check for a data file and create it if necessary
        print('No first_time.sh script found for this benchmark. This is unexpected. Please check the benchmark documentation.')
    
    print(f"\n🎉 {benchmark_name} benchmark is now ready to use!")
    print(f"You can verify it with: python setup_benchmark.py --verify {benchmark_name}")
    
    return True

def verify_benchmark(benchmark_name):
    """Verify a specific benchmark by loading its data and creating an environment."""
    if benchmark_name not in task_configs:
        print(f"ERROR: Benchmark '{benchmark_name}' not found.")
        print("Use --list to see available benchmarks.")
        return False
    
    print(f"\n=== Verifying {benchmark_name} benchmark ===\n")
    
    try:
        # Import PwPBench
        from pwp.bench import PwPBench
        
        # Create benchmark instance
        print(f"Creating PwPBench instance for {benchmark_name}...")
        bench = PwPBench(benchmark_name)
        
        # Try to load the dataset
        print("Loading dataset...")
        try:
            dataset = bench.get_dataset()
            if dataset and len(dataset) > 0:
                print(f"✅ Successfully loaded dataset with {len(dataset)} tasks")
                
                # Print information about the first task
                print("\nFirst task information:")
                task = dataset[0]
                for key, value in task.items():
                    if isinstance(value, str) and len(value) > 100:
                        value = value[:100] + "..."
                    print(f"  {key}: {value}")
            else:
                print("⚠️ Dataset loaded but contains no tasks")
        except Exception as e:
            print(f"❌ Error loading dataset: {e}")
            return False
        
        # Ask if the user wants to create an environment
        choice = input("\nDo you want to create a verification environment for this benchmark? (y/n): ")
        if choice.lower() == 'y':
            print("\nCreating environment for the first task...")
            try:
                # Create environment for the first task
                env = bench.get_env(dataset[0])
                
                # Take a screenshot
                print("Taking screenshot...")
                screenshot = env.render()
                
                # Save the screenshot
                os.makedirs("output", exist_ok=True)
                screenshot_path = f"output/{benchmark_name}_verify.png"
                screenshot.save(screenshot_path)
                print(f"✅ Screenshot saved to {screenshot_path}")
                
                # Run a simple command
                print("Running a simple command...")
                result = env.step("echo 'Hello from PwP verification'")
                print(f"Command output: {result['output']}")
                
                # Clean up
                print("\nCleaning up environment...")
                env.stop()
                env.remove()
                print("✅ Environment removed")
            except Exception as e:
                print(f"❌ Error creating environment: {e}")
                return False
        
        print(f"\n🎉 {benchmark_name} benchmark verification completed successfully!")
        return True
    
    except ImportError as e:
        print(f"ERROR: {e}")
        print("Make sure you have installed PwP and its dependencies.")
        return False

def main():
    """Parse command-line arguments and execute the appropriate function."""
    parser = argparse.ArgumentParser(description="PwP Benchmark Setup Script")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--list', action='store_true', help='List available benchmarks')
    group.add_argument('--setup', type=str, help='Set up a specific benchmark')
    group.add_argument('--verify', type=str, help='Verify a specific benchmark')
    
    args = parser.parse_args()
    
    if args.list:
        list_benchmarks()
    elif args.setup:
        setup_benchmark(args.setup)
    elif args.verify:
        verify_benchmark(args.verify)

if __name__ == "__main__":
    main() 