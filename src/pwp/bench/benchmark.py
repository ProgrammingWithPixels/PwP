import json
import os
import time

import docker
from datasets import load_dataset

from pwp.env.environment import PwP

task_configs = {
    "swebench": {
        "dataset": "pwp_bench/SWE-bench/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/SWE-bench/",
        "prebuilt_image": True,
    },
    "swebench_mm": {
        "dataset": "pwp_bench/SWE-bench_mm/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/SWE-bench_mm/",
        "prebuilt_image": True,
    },
    "swtbench": {
        "dataset": "pwp_bench/swtbench/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/swtbench/",
        "prebuilt_image": True,
    },
    "humaneval": {
        "dataset": "pwp_bench/human-eval/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/human-eval",
    },
    "vscode": {
        "dataset": "pwp_bench/VSCode/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/VSCode",
    },
    "dsbench": {
        "dataset": "pwp_bench/DSBench/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/DSBench",
    },
    "chartmimic": {
        "dataset": "pwp_bench/ChartMimic/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/ChartMimic",
    },
    "intercode": {
        "dataset": "pwp_bench/intercode/{config}_data.json",
        "configs": ["bash", "sql", "ctf"],
        "split": "train",
        "docker_path": "pwp_bench/intercode",
    },
    "design2code": {
        "dataset": "pwp_bench/design2code/data.json",
        "split": "train",
        "docker_path": "pwp_bench/design2code",
    },
    "canitedit": {
        "dataset": "pwp_bench/canitedit/data.json",
        "split": "train",
        "docker_path": "pwp_bench/canitedit",
    },
    "resq": {
        "dataset": "pwp_bench/resq/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/resq",
    },
    "minictx": {
        "dataset": "pwp_bench/minictx/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/minictx",
    },
    "bird": {
        "dataset": "pwp_bench/bird/data.json",
        "split": "train",
        "docker_path": "pwp_bench/bird",
    },
    "swebench-java": {
        "dataset": "pwp_bench/swebench-java/data.json",
        "split": "train",
        "docker_path": "pwp_bench/swebench-java",
        "prebuilt_image": True,
    },
    "nocode": {
        "dataset": "pwp_bench/nocode/data.jsonl",
        "split": "train",
        "docker_path": "pwp_bench/nocode",
    },
}


class PwPBench:

    def __init__(self, task_name, config=None):
        self.task_name = task_name
        self.dataset = task_configs[task_name]["dataset"]
        self.split = task_configs[task_name]["split"]

        self.docker_path = task_configs[task_name]["docker_path"]
        self.docker_folder = self.docker_path

        if "configs" in task_configs[task_name]:
            if config is None:
                # raise ValueError(f'Config not specified for {self.task_name}')
                config = "ctf"
                print(
                    f"Warning: Config not specified for {self.task_name}. Using default config: {config}"
                )
            if config not in task_configs[task_name]["configs"]:
                raise ValueError(f"Config {config} not found for {self.task_name}")
            self.config = config
            self.dataset = self.dataset.format(config=self.config)
            self.docker_path = os.path.join(
                self.docker_path, self.config + ".Dockerfile"
            )
            # self.task_name = self.task_name+'_'+self.config
            self.docker_folder = os.path.dirname(self.docker_path)
        else:
            self.config = None

    def get_dataset(self, path="pwp_bench/pwp_lite.json"):
        try:
            pwp_lite = json.load(open(path, "r"))
            return (
                pwp_lite[self.task_name]
                if not self.task_name.startswith("intercode")
                else pwp_lite["intercode"]
            )
        except Exception as e:
            print(f"Error loading dataset: {e}")
            return json.load(open(self.dataset, "r"))

    def _get_prebuilt_image(self, row):
        # For now, only swebench is supported.
        if self.task_name == "swebench":
            from swebench.harness.test_spec import (
                get_test_specs_from_dataset, make_test_spec)

            test_spec = make_test_spec(row)
            env = PwP(test_spec.instance_image_key, load_existing_container=True)
        elif self.task_name == "swtbench":
            env = PwP(row["instance_image_key"], load_existing_container=True)
        elif self.task_name == "swebench-java":
            env = PwP(row["instance_image_key"], load_existing_container=True)
        elif self.task_name == "swebench_mm":
            # breakpoint()
            env = PwP(
                "sweb.eval.x86_64." + row["instance_id"].lower(),
                load_existing_container=True,
            )
        else:
            raise ValueError(f"Prebuilt image not supported for {self.task_name}")
        return env

    def get_env(self, row):
        # Now check if Image name is already present
        if (
            "prebuilt_image" in task_configs[self.task_name]
            and task_configs[self.task_name]["prebuilt_image"]
        ):
            env = self._get_prebuilt_image(row)
        elif docker.from_env().images.list(
            "pwp_"
            + self.task_name
            + (("_" + self.config) if self.config is not None else "")
        ):
            # Just load the image
            # breakpoint()
            env = PwP(
                "pwp_"
                + self.task_name
                + (("_" + self.config) if self.config is not None else "")
            )
        else:
            if self.docker_folder == self.docker_path:
                client = docker.from_env()
                image, logs = client.images.build(
                    path=self.docker_folder, tag="pwp_" + self.task_name, rm=True
                )
                for line in logs:
                    if "stream" in line:
                        print(line["stream"].strip())
            else:
                client = docker.from_env()
                image, logs = client.images.build(
                    path=self.docker_folder,
                    dockerfile=os.path.basename(self.docker_path),
                    tag="pwp_" + self.task_name + "_" + self.config,
                    rm=True,
                )
                for line in logs:
                    if "stream" in line:
                        print(line["stream"].strip())

            env = PwP(
                "pwp_"
                + self.task_name
                + (("_" + self.config) if self.config is not None else "")
            )

        # Now load the corresponding setup file from task_path/setup_files/setup.py
        import importlib.util

        spec = importlib.util.spec_from_file_location(
            "setup", os.path.join(self.docker_folder, "setup_files/setup.py")
        )
        setup = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(setup)
        time.sleep(5)
        # breakpoint()
        if "setup_script" not in row:
            setup.setup(env, row)
        else:
            eval(f"setup.{row['setup_script']}(env, row)")
        return env

    def get_reward(self, env, row):
        import importlib.util

        spec = importlib.util.spec_from_file_location(
            "eval", os.path.join(self.docker_folder, "setup_files/eval.py")
        )
        evaluator = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(evaluator)

        if "eval_script" in row:
            arguments = eval(row["eval_arguments"])
            result = eval(f"evaluator.{row['eval_script']}(env, *arguments)")
        else:
            result = evaluator.eval(env, row)
        return result


if __name__ == "__main__":
    pwp_bench = PwPBench("chartmimic")

    dataset = pwp_bench.get_dataset()
    env = pwp_bench.get_env(dataset[0])
    env.render().save("test.png")
    print(pwp_bench.get_reward(env, dataset[0]))
    del env
