"""
Programming with Pixels (PwP)
============================

PwP is a package that provides environment and benchmarks for programming tasks with visual interfaces.

Main components:
- pwp.env: Environment module
- pwp.bench: Benchmark module
- pwp.agents: Agent implementations
- pwp.utils: Utility functions
- pwp.tools: Tools for agents
- pwp.functions: Function implementations for tools
- pwp.prompts: Prompt templates for agents
"""

__version__ = "0.1.0"

from pwp.bench import PwPBench
# Convenience imports
from pwp.env import PwP

__all__ = ["PwP", "PwPBench", "__version__"]
