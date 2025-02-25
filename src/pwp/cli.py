#!/usr/bin/env python
"""
Command-line interface for PWP package
"""

import argparse
import sys

from pwp.bench import PwPBench, task_configs
from pwp.env import PwP


def main():
    parser = argparse.ArgumentParser(description="PWP: Programming with Pixels")
    subparsers = parser.add_subparsers(dest="command", help="Command to run")

    # Environment command
    env_parser = subparsers.add_parser("env", help="Run PWP environment")
    env_parser.add_argument("--image", default="pwp_env", help="Docker image name")
    env_parser.add_argument("--no_vnc", action="store_false", dest="vnc", help="Disable VNC (enabled by default)")
    env_parser.add_argument(
        "--ffmpeg", action="store_true", help="Enable ffmpeg streaming"
    )

    # Benchmark command
    bench_parser = subparsers.add_parser("bench", help="Run PWP benchmark")
    bench_parser.add_argument(
        "task", choices=list(task_configs.keys()), help="Benchmark task"
    )
    bench_parser.add_argument(
        "--list", action="store_true", help="List available tasks"
    )

    # List command
    list_parser = subparsers.add_parser("list", help="List available tasks")

    args = parser.parse_args()

    if args.command == "env":
        env = PwP(image_name=args.image, enable_vnc=args.vnc, enable_ffmpeg=args.ffmpeg)
        # Run vscode in the background
        env.run_vscode()
        print(f"PWP Environment started with image {args.image}")
        print("Press Ctrl+C to exit")
        try:
            while True:
                cmd = input("Enter command (or 'exit' to quit): ")
                if cmd.lower() == "exit":
                    break
                response = env.step(cmd)
                print(f"Command executed: {cmd}")
        except KeyboardInterrupt:
            pass
        finally:
            env.stop()
            env.remove()

    elif args.command == "bench" and args.list:
        print("Available benchmark tasks:")
        for task in task_configs.keys():
            print(f"  - {task}")

    elif args.command == "bench":
        bench = PwPBench(args.task)
        dataset = bench.get_dataset()
        print(f"Loaded {args.task} benchmark with {len(dataset)} tasks")

        # Prompt if the user wants to start docker env.
        start_env = input("Do you want to start a Docker environment to run this benchmark? (y/n): ")
        
        if start_env.lower() in ["y", "yes"]:
            print("Starting Docker environment...")
            env = bench.get_env(dataset[0])
            print(f"PwP Environment started with image {args.image}")
            print("Press Ctrl+C to exit")
            try:
                while True:
                    cmd = input("Enter command (or 'exit' to quit): ")
                    if cmd.lower() == "exit":
                        break
                    response = env.step(cmd)
            except KeyboardInterrupt:
                pass
        else:
            print(f"Benchmark {args.task} ready.")
    elif args.command == "list" or args.command is None:
        print("Available benchmark tasks:")
        for task in task_configs.keys():
            print(f"  - {task}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
