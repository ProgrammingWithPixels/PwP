# Contributing to Programming with Pixels (PwP)

Thank you for your interest in contributing to the PwP project! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Setting Up Development Environment](#setting-up-development-environment)
- [Project Structure](#project-structure)
- [Adding New Features](#adding-new-features)
  - [Adding New Benchmarks](#adding-new-benchmarks)
  - [Extending the Environment](#extending-the-environment)
  - [Adding New Agents](#adding-new-agents)
  - [Adding New Tools](#adding-new-tools)
- [Code Style Guidelines](#code-style-guidelines)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Setting Up Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/pwp.git
   cd pwp
   ```
3. Install the package in development mode:
   ```bash
   pip install -e .
   ```
4. Build the base Docker image:
   ```bash
   cd src/pwp/docker/
   docker build -t pwp_env .
   ```

## Project Structure

The PwP project follows this structure:

```
pwp/
├── examples/          # Example scripts demonstrating usage
├── pwp_bench/         # Benchmark tasks
├── src/               # Source code
│   └── pwp/           # Main package
│       ├── agents/    # Agent implementations
│       ├── bench/     # Benchmark module
│       ├── docker/    # Docker configuration files
│       ├── env/       # Environment module
│       ├── functions/ # Function implementations
│       ├── prompts/   # Prompt templates
│       ├── tools/     # Tool implementations
│       └── utils/     # Utility functions
├── README.md          # Main documentation
└── setup.py           # Package setup
```

## Adding New Features

### Adding New Benchmarks

<!-- add a statement about contacting us if you want to get your benchmark included in PwP-Bench -->

To add a new benchmark to the PwP-Bench suite:

1. Create a new directory in `pwp_bench/` with your benchmark name:
   ```bash
   mkdir -p pwp_bench/your_benchmark/setup_files
   ```

2. Create the necessary files:
   - `data.json` or `data.jsonl` with your task examples
   - `setup_files/setup.py` for environment setup
   - `setup_files/eval.py` for evaluation
   - `first_time.sh` for initialization
   - `Dockerfile` if you need a custom environment

3. Add your benchmark to `task_configs` in `src/pwp/bench/benchmark.py`:
   ```python
   task_configs = {
       # ... existing benchmarks ...
       'your_benchmark': {
           'dataset': 'pwp_bench/your_benchmark/data.json',
           'split': 'train',
           'docker_path': 'pwp_bench/your_benchmark/'
       },
   }
   ```

4. Verify your benchmark:
   ```python
   from pwp.bench import PwPBench
   bench = PwPBench('your_benchmark')
   dataset = bench.get_dataset()
   # Verify that your benchmark loads correctly
   ```

#### Benchmark File Templates

**setup.py**:

```python
def setup(env, task):
    """
    Set up the environment for a specific task.
    
    Args:
        env: PwP environment instance
        task: Task data dictionary
    """
    # Set up files, directories, etc.
    env.run_command(f"mkdir -p /home/devuser/task_{task['task_id']}")
    
    # Create task-specific files
    if 'files' in task:
        for filename, content in task['files'].items():
            env.file_write(f"/home/devuser/task_{task['task_id']}/{filename}", content)
    
    # Any additional setup
    env.step("cd /home/devuser/task_{task['task_id']}")
```

**eval.py**:

```python
def eval(env, task):
    """
    Evaluate the agent's solution.
    
    Args:
        env: PwP environment instance
        task: Task data dictionary
    
    Returns:
        float: Score between 0.0 and 1.0
    """
    # Implement your evaluation logic
    # For example, comparing output with expected result
    output, _ = env.run_command("cat /home/devuser/solution.txt")
    
    if output.strip() == task['reference_solution'].strip():
        return 1.0
    else:
        return 0.0
```

### Extending the Environment

To add new functionality to the PwP environment:

1. Modify the appropriate file in `src/pwp/env/`.
2. Add your new methods to the `PwP` class in `environment.py`.
3. Document your changes with docstrings and update the README if necessary.
4. Verify that your changes work as expected.

### Adding New Agents

To add a new agent implementation:

1. Create a new file in `src/pwp/agents/`:
   ```python
   # src/pwp/agents/your_agent.py
   from pwp.env import PwP
   
   class YourAgent:
       def __init__(self, params):
           self.params = params
       
       def run(self, env, task):
           # Implement your agent logic
           pass
   ```

2. Add any necessary prompts to `src/pwp/prompts/`.
3. Add any necessary tools to `src/pwp/tools/`.
4. Document your agent in the README.

### Adding New Tools

To add new tools for agents:

1. Add your tool implementation to `src/pwp/tools/`:
   ```python
   # src/pwp/tools/your_tool.py
   def your_tool_function(env, params):
       # Implement your tool
       pass
   ```

2. Add function implementation to `src/pwp/functions/` if needed.
3. Update the tool mapping in the appropriate agent file.

## Code Style Guidelines

- Follow PEP 8 for Python code style.
- Use descriptive variable and function names.
- Write comprehensive docstrings in Google or NumPy format.
- Keep functions focused and single-purpose.
- Add type hints when possible.
- Use consistent indentation (4 spaces for Python).
- Keep line length to 88 characters or fewer (Black formatter standard).
- Write meaningful commit messages following conventional commits format.

The project uses Black and isort for code formatting. Run the following before submitting your changes:

```bash
pip install black isort
black src/
isort src/
```

## Documentation

- Document all public functions, classes, and methods with docstrings.
- Update README.md and related documentation when adding new features.
- Consider adding examples to the `examples/` directory.

## Pull Request Process

1. Fork the repository and create a new branch for your feature.
2. Make your changes following the guidelines above.
3. Update the documentation to reflect your changes.
4. Ensure your code follows the style guidelines.
5. Submit a pull request with a clear description of your changes.
6. Wait for a review from the maintainers.

## Reporting Issues

- Use the GitHub issue tracker to report bugs or request features.
- Provide a clear description of the issue.
- Include steps to reproduce the issue when applicable.
- Mention your environment details (OS, Python version, etc.).

Thank you for contributing to the PwP project! Your efforts help make this tool better for everyone. 