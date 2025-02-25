# PwP-Bench: Benchmark Suite for Programming with Pixels

PwP-Bench is a unification of SWE-benchmarks designed to evaluate AI agents' ability to interact with visual interfaces and perform programming tasks. Each benchmark focuses on different aspects of programming and interface interaction.

## Task Overview

| Task | Description | Input | Output | Evaluation |
|------|-------------|-------|--------|------------|
| HumanEval | Python coding problems | Problem specification | Python function | Functional correctness |
| Design2Code | Converting design mockups to code | Design image | HTML/CSS | Visual similarity |
| ChartMimic | Recreating charts from visual references | Chart image | Code to generate chart | Visual similarity |
| InterCode | Interactive coding (bash, SQL, CTF) | Task specification | Interactive solution | Task completion |
| RES-Q | Reasoning about SQL queries | Database + question | SQL query | Query correctness |
| CanitEdit | Code editing tasks | Code + edit instruction | Edited code | Edit correctness |
| VSCode | VSCode-specific tasks | Task specification | VSCode operations | Task completion |
| Bird | BI reporting dashboard tasks | Business question | SQL query | Query correctness |
| DSBench | Data science benchmark | Data + task | Analysis code | Output correctness |
| SWE-bench | Software engineering tasks | Code + bug report | Fixed code | Functional correctness |
| SWE-bench-java | Java software engineering tasks | Code + task | Java solution | Functional correctness |
| SWE-bench-mm | Multimodal software engineering | Code + screenshots | Fixed code | Functional correctness |
| MiniCtx | Minimal context understanding | Code snippet | Solution | Output correctness |
| NoCode | No-code tool interaction | Task | Interface operations | Task completion |

## Installation

To download and set up a particular task, go to its corresponding folder and run the `first_time.sh` script:

```bash
cd pwp_bench/Design2Code
./first_time.sh
```

Alternatively, you can use the provided setup script:

```bash
python -m pwp_bench.setup_benchmark --task Design2Code
```

## Using Benchmarks

Here's how to use a benchmark task:

```python
from pwp.bench import PwPBench

# Create a benchmark instance
bench = PwPBench('humaneval')

# Get the dataset (all tasks in the benchmark)
dataset = bench.get_dataset()

# Create an environment for a specific task
task_env = bench.get_env(dataset[0])

# Interact with the environment (for agent implementation)
task_env.step("ls -la")
screenshot = task_env.render()

# Evaluate the solution
reward = bench.get_reward(task_env, dataset[0])
print(f"Task reward: {reward}")
```

## Benchmark Structure

Each benchmark follows a standard directory structure:

```
benchmark_name/
├── data.json        # Task data in JSON format
├── data.jsonl       # Or in JSONL format (one task per line)
├── first_time.sh    # Setup script
├── Dockerfile       # Docker configuration
└── setup_files/
    ├── setup.py     # Environment setup for tasks
    └── eval.py      # Evaluation functions for tasks
```

## Adding a New Benchmark

If you have a benchmark you'd like to see included in PwP-Bench, please [contact us](mailto:pranjal2041@gmail.com) to discuss integration. We're actively looking to expand the range of tasks and welcome community contributions.

To add a new benchmark to the PwP-Bench suite:

1. Create a new directory in `pwp_bench/` with your benchmark name
2. Create a `data.json` or `data.jsonl` file with your task examples
3. Create a `setup_files` directory with `setup.py` and `eval.py`
4. Create a `first_time.sh` script to handle any necessary downloads
5. Add a Dockerfile for any custom environment setup
6. Add your benchmark to `task_configs` in `pwp.bench.benchmark`

### Task Data Format

The task data should follow this general format (adjust as needed for your specific benchmark):

```json
{
  "task_id": "unique_task_id",
  "prompt": "Task description the agent sees",
  "reference_solution": "Reference solution for evaluation",
  "setup_script": "setup_function_name",  // Optional
  "eval_script": "eval_function_name",    // Optional
  "eval_arguments": "[arg1, arg2, ...]",  // Optional
  "additional_fields": "task-specific data"
}
```

### Setup and Evaluation Scripts

The `setup.py` file should contain a `setup(env, task)` function that prepares the environment for a specific task.

The `eval.py` file should contain an `eval(env, task)` function that evaluates the agent's solution.

For more details on how to add your own benchmark, please refer to our [Contributing Guidelines](../CONTRIBUTING.md#adding-new-benchmarks).


## Currently Available Benchmarks

The following benchmarks are currently available:

- [x] Design2Code
- [x] InterCode (bash, SQL, CTF)
- [x] RES-Q
- [x] ChartMimic
- [x] HumanEval
- [x] CanitEdit
- [x] VSCode
- [x] Bird
- [x] DSBench
- [ ] MiniCtx
- [ ] SWE-bench
- [ ] SWE-bench-java
- [ ] SWTbench
- [ ] SWE-bench-mm
- [ ] GeneralSWE

Please hang tight, as we complete the upload for pending tasks!

## Contributing

We welcome contributions of new benchmarks or improvements to existing ones! Please follow these steps:

1. Fork the repository
2. Create your benchmark following the structure above
3. Submit a pull request with a clear description of your benchmark

For detailed guidance, please refer to our [Contributing Guidelines](../CONTRIBUTING.md).

## Citation

If you use PwP-Bench in your research, please cite our paper:

```bibtex
@article{pwp2025,
  title={Programming with Pixels: Computer-Use Meets Software Engineering},
  author={Aggarwal, Pranjal and Welleck, Sean},
  journal={Preprint. Under Review},
  year={2025}
}
```