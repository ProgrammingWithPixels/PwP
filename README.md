# Programming with Pixels (PwP)

<p align="center">
  <img src="media/pwp_teaser_v4.png" alt="PwP Logo" width="100%" />
</p>

<div align="center">

[![PyPI Version](https://img.shields.io/pypi/v/programming-with-pixels.svg)](https://pypi.org/project/programming-with-pixels/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Paper](https://img.shields.io/badge/paper-PwP-red.svg)](https://arxiv.org/pdf/2502.18525.pdf)
[![Website](https://img.shields.io/badge/website-PwP-orange.svg)](https://www.programmingwithpixels.com)

[Paper](https://arxiv.org/pdf/2502.18525.pdf) | 
[Website](https://www.programmingwithpixels.com) | 
[Dataset](pwp_bench/README.md) | 
[Demo](https://www.programmingwithpixels.com/#pwp-in-action)

</div>

## Overview

**Programming with Pixels (PwP)** is a modern framework for evaluating and developing Software Engineering (SWE) agents that interact with computers as humans do - through visual perception and basic actions like typing and clicking.

Our motivating hypothesis is that achieving general-purpose Software Engineering (SWE) agents requires a shift to **computer-use agents** that can interact with any IDE interface through screenshots and primitive actions, rather than through specialized tool APIs.

## Installation

### Prerequisites

- Python 3.6+
- Docker
- (Optional) NVIDIA GPU with CUDA support

### Using pip (Recommended)

```bash
pip install programming-with-pixels
```

### Development Installation

```bash
git clone https://github.com/ProgrammingWithPixels/pwp.git
cd pwp
pip install -e .
```

## Quick Start

```python
from pwp import PwP
from pwp import PwPBench

# Create a basic environment
env = PwP(image_name='pwp_env')

# Take a screenshot
observation = env.render()
observation.save('screenshot.png')

# Execute a command
result = env.step("echo 'Hello, World!'")
print(result['output'])

# Try a benchmark task
bench = PwPBench('humaneval')
dataset = bench.get_dataset()
task_env = bench.get_env(dataset[0])
```

### Command Line Interface

For quicker testing, PwP also comes with a convenient command-line interface:

```bash
# Start an environment
pwp env --vnc

# List available benchmark tasks
pwp list

# Run a benchmark
pwp bench humaneval
```

## Examples

Check out the [examples](examples/) directory for demonstration scripts:

- [Quickstart](examples/quickstart.py): Complete walkthrough of PwP's capabilities, including environment interaction, benchmarks, and advanced features
- [Basic Demo](examples/demo.py): Simple environment setup and interaction showcase
- [Demo2](examples/demo2.py): Additional demonstration of PwP features

## Benchmark Tasks

PwP-Bench comes with a wide range of benchmark tasks for evaluating agents:

- **HumanEval**: Python coding problems
- **Design2Code**: Converting design mockups to code
- **ChartMimic**: Recreating charts from visual references
- **SWE-bench**: Software engineering tasks
- **And many more!**

You will first need to setup benchmarks for evaluating agents.
See the [benchmark documentation](pwp_bench/README.md) for more details.

## Evaluating Agents

For detailed examples, check out the agent implementations in the [src/pwp/agents](src/pwp/agents/) directory. Each agent type can be customized with different LLM backends and system prompts to optimize for various tasks.


## Building Custom Environments

### Build the Base Environment

```bash
# Build the base PWP environment
cd src/pwp/docker/
docker build -t pwp_env .
```

### Custom Environment

You can create custom Docker environments by extending the base image:

```dockerfile
FROM pwp_env

# Install additional dependencies
RUN apt-get update && apt-get install -y \
    your-package-here \
    && rm -rf /var/lib/apt/lists/*

# Add custom files
COPY your-files /home/devuser/your-files
```

## Package Structure

The PwP package consists of several modules:

- `pwp.env`: Core environment module for managing Docker containers
- `pwp.bench`: Benchmark module with various programming tasks
- `pwp.agents`: Agent implementations for solving tasks
- `pwp.utils`: Utility functions for image processing and other helpers
- `pwp.tools`: Tools for agent interaction with environments
- `pwp.functions`: Function implementations for tools
- `pwp.prompts`: Prompt templates for different agent types

See the [package documentation](src/pwp/README.md) for more details on each module.



## Contributing

We welcome contributions to the PwP project! Please see our [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Citation

If you use PwP in your research, please cite our paper:

```bibtex
@misc{aggarwal2025programmingpixelscomputerusemeets,
      title={Programming with Pixels: Computer-Use Meets Software Engineering}, 
      author={Pranjal Aggarwal and Sean Welleck},
      year={2025},
      eprint={2502.18525},
      archivePrefix={arXiv},
      primaryClass={cs.SE},
      url={https://arxiv.org/abs/2502.18525}, 
}
```

## Acknowledgments

- This project builds on various open-source tools and libraries
- Thanks to all contributors who have helped shape the project

