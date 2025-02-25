# Programming with Pixels (PwP) - Package Documentation

This document provides detailed information about the PwP package structure, architecture, and usage patterns.

## Architecture Overview

PwP is built around a core Docker-based environment system that allows AI agents to interact with visual interfaces through screenshots and input commands. The system follows a modular design with the following key components:

```
pwp/
├── env/         # Environment module for Docker-based visual interfaces
├── bench/       # Benchmark module for evaluating agents
├── agents/      # Agent implementations
├── utils/       # Utility functions and helpers
├── tools/       # Tools for agent interaction
├── functions/   # Function implementations for tools
├── prompts/     # Prompt templates for agents
└── docker/      # Docker configuration files for environments
```

## Module Details

### `pwp.env` - Environment Module

The core environment module provides the `PwP` class, which manages Docker containers for visual interface interaction.

#### Key Features

- Docker container management (creation, starting, stopping)
- Screenshot capture and rendering
- Command execution within the container
- File manipulation within the container
- VNC support for remote viewing
- Checkpointing system for environment state preservation

#### Example Usage

```python
from pwp.env import PwP

# Create a basic environment
env = PwP(image_name='pwp_env')

# Execute a command
result = env.step("ls -la")
print(result['output'])

# Take a screenshot
screenshot = env.render()
screenshot.save('current_state.png')

# Get DOM structure with bounding boxes
annotated_img, dom_data = env.get_som_image(screenshot)
annotated_img.save('annotated_screenshot.png')

# Get currently visible file in editor
file_view = env.get_file_view()
print(f"Current file: {file_view['filePath']}")
print(f"Cursor position: {file_view['cursorPosition']}")

# Create a checkpoint
env.add_checkpoint("my_checkpoint")

# Restore from checkpoint
env.restore_checkpoint("my_checkpoint")

# Clean up
env.stop()
env.remove()
```

### `pwp.bench` - Benchmark Module

The benchmark module provides the `PwPBench` class, which manages benchmark tasks and evaluation.

#### Supported Benchmarks

PwP supports a wide range of benchmark tasks:

- `humaneval`: Python coding problems
- `swebench`: Software engineering benchmark
- `swebench-java`: Java software engineering benchmark
- `dsbench`: Data science benchmark
- `chartmimic`: Chart recreation tasks
- `intercode`: Interactive coding in bash, SQL, CTF
- `design2code`: Converting design mockups to code
- `canitedit`: Code editing tasks
- `resq`: Reasoning about SQL queries
- `minictx`: Minimal context understanding
- `bird`: BI reporting dashboard tasks
- `vscode`: VSCode-specific tasks
- `nocode`: No-code tool interaction
- `swebench-mm`: Multimodal software engineering

#### Example Usage

```python
from pwp.bench import PwPBench

# Create a benchmark instance
bench = PwPBench('humaneval')

# Get the dataset
dataset = bench.get_dataset()
print(f"Loaded {len(dataset)} tasks")

# Create an environment for a specific task
env = bench.get_env(dataset[0])

# Evaluate a solution
reward = bench.get_reward(env, dataset[0])
print(f"Task reward: {reward}")
```

### `pwp.agents` - Agent Module

The agents module provides implementations of different agent architectures for interacting with visual interfaces.

#### Available Agents

- `AssistedAgent`: Agent that receives assistance from a human
- `ComputerUseAgent`: Agent that interacts directly with the computer

### `pwp.utils` - Utilities Module

The utilities module provides helper functions for various tasks:

- Image processing and manipulation
- DOM element parsing and visualization
- LLM utilities for embedding and encoding
- Caching utilities

#### Example Usage

```python
from pwp.utils.utils import draw_bounding_boxes

# Draw bounding boxes on an image based on DOM data
annotated_img = draw_bounding_boxes(
    dom_data_csv, 
    screenshot,
    viewport_size={'height': 1080, 'width': 1920},
    caption_icons=True
)
```

### `pwp.tools` - Tools Module

The tools module provides implementations of tools that agents can use to interact with environments.

#### Available Tool Categories

- Computer interaction tools (mouse, keyboard)
- File system tools (read, write, search)
- UI analysis tools (element identification)
- DOM manipulation tools

### `pwp.functions` - Functions Module

The functions module provides implementations of functions that are called by tools.

### `pwp.prompts` - Prompts Module

The prompts module provides templates for different agent types.

### `pwp.docker` - Docker Configuration

The docker module contains environment Dockerfile and other configuration, setup scripts for creating Docker environments.

## Advanced Usage Patterns

### Custom Environment Creation

You can create custom environments by extending the base Docker image:

```dockerfile
FROM pwp_env

# Install additional packages
RUN apt-get update && apt-get install -y \
    your-package \
    && rm -rf /var/lib/apt/lists/*

# Add application files
COPY your-app /home/devuser/your-app

# Set up application
RUN cd /home/devuser/your-app && \
    npm install
```

### Adding New Benchmark Tasks

To add a new benchmark task, please follow the detailed instructions in our [Contributing Guidelines](../../CONTRIBUTING.md#adding-new-benchmarks).

In brief:
1. Create a directory in `pwp_bench/` with your task name
2. Add a `data.jsonl` or `data.json` file with task examples
3. Create a `setup_files` directory with `setup.py` and `eval.py`
4. Add your task to `task_configs` in `pwp.bench.benchmark`

### Agent Development

To create a new agent:

1. Create a new file in `pwp.agents`
2. Implement the agent interface
3. Add any necessary prompts to `pwp.prompts`
4. Add any custom tools to `pwp.tools`