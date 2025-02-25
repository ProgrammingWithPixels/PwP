Programming with Pixels (PwP)
============================

.. image:: https://img.shields.io/pypi/v/programming-with-pixels.svg
   :target: https://pypi.org/project/programming-with-pixels/
   :alt: PyPI Version

.. image:: https://img.shields.io/pypi/dm/programming-with-pixels.svg
   :target: https://pypi.org/project/programming-with-pixels/
   :alt: PyPI Downloads

.. image:: https://img.shields.io/pypi/pyversions/programming-with-pixels.svg
   :target: https://pypi.org/project/programming-with-pixels/
   :alt: PyPI Python Versions

A framework for computer-use software engineering agents that interact with computers through visual perception and basic actions.

Overview
--------

**Programming with Pixels (PwP)** is a modern framework for evaluating and developing Software Engineering (SWE) agents that interact with computers as humans do - through visual perception and basic actions like typing and clicking.

Our motivating hypothesis is that achieving general-purpose Software Engineering (SWE) agents requires a shift to **computer-use agents** that can interact with any IDE interface through screenshots and primitive actions, rather than through specialized tool APIs.

Features
--------

- **Visual Interface Interaction**: Interact with any visual interface through screenshots and input commands
- **Docker Containerization**: Secure, reproducible environments for running applications
- **Benchmark Suite**: Extensive set of programming tasks for evaluating agents
- **Agent Framework**: Built-in support for different agent architectures
- **VNC Support**: Remote viewing of graphical environments
- **CLI Interface**: Easy command-line tools for working with environments

Installation
-----------

.. code-block:: bash

    pip install programming-with-pixels

Quick Start
----------

.. code-block:: python

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

Links
-----

- `Documentation <https://www.programmingwithpixels.com>`_
- `Source Code <https://github.com/ProgrammingWithPixels/pwp>`_
- `Bug Tracker <https://github.com/ProgrammingWithPixels/pwp/issues>`_

License
-------

This project is licensed under the MIT License. 