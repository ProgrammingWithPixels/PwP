import argparse
import json
import os
import pickle
import time
import uuid

import litellm
import numpy as np
import PIL

from pwp.bench import PwPBench
from pwp.functions.assisted import FUNCTIONS
from pwp.prompts.prompts import get_assisted_prompt
from pwp.tools.tools import ASSISTED_TOOLS_MAPPING
from pwp.utils.llm_utils import encode_image
from pwp.utils.utils import get_images_from_text

# litellm.set_verbose=True
parser = argparse.ArgumentParser()
parser.add_argument("--model", type=str, default="gpt-4o")
parser.add_argument("--system_prompt", type=str, default="assisted_prompt")
parser.add_argument("--output_dir", type=str, default="logs_icml_assisted")
parser.add_argument("--temperature", type=float, default=0.3)
parser.add_argument("--max_iters", type=int, default=20)
parser.add_argument("--task", type=str, default="chartmimic")
args = parser.parse_args()

bench = PwPBench(args.task)
dataset = bench.get_dataset()

import importlib

# Load the system prompt from prompts.{args.system_prompt}
system_prompt = importlib.import_module(f"prompts.{args.system_prompt}").system_message

OUTPUT_DIR = os.path.join(args.output_dir, args.task, args.model)
os.makedirs(OUTPUT_DIR, exist_ok=True)


workdirs = {
    "humaneval": "/home/devuser/evaluation",
    "swebench": "/testbed",
    "swtbench": "/testbed",
    "swebench-java": "/testbed",
    "dsbench": "/home/devuser/evaluation",
    "chartmimic": "/home/devuser/evaluation",
    "intercode": "/home/devuser/evaluation",
    "design2code": "/home/devuser/evaluation",
    "canitedit": "/home/devuser/evaluation",
    "resq": "/home/devuser/evaluation",
    "minictx": "/home/devuser/evaluation",
    "bird": "/home/devuser/evaluation",
    "vscode": "/home/devuser/",
    "swebench_mm": "/testbed",
}

# Update workdirs to precise location for some of the benchmarks


run_as_root = {"swebench", "swtbench", "swebench-java", "swebench_mm"}


def sanitize_tools_for_gemini(tools):
    for tool in tools:
        if len(tool["function"]["parameters"]) == 0:
            tool["function"]["parameters"] = {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string",
                        "description": "Redundant parameter. Pass anything.",
                    }
                },
            }
    return tools


def call_llm(model, messages, tools, temperature=0.3, max_retries=5, initial_delay=1):
    if model.find("claude") != -1:
        # We need to add extra kwargs
        extra_headers = {"anthropic-beta": "computer-use-2024-10-22"}
    else:
        extra_headers = None
    if model.find("gemini") != -1 or model.find("claude") != -1:
        tools = sanitize_tools_for_gemini(tools)

    for attempt in range(max_retries):
        try:
            # breakpoint()
            response = litellm.completion(
                model=args.model,
                messages=messages,
                tools=tools,
                temperature=temperature,
                tool_choice="auto",
                extra_headers=extra_headers,
            )
            with open(
                f'litellm_usage_dumps/{uuid.uuid4()}_{args.model.replace("/","_")}.pkl',
                "wb",
            ) as f:
                pickle.dump(response, f)
            return response
        except Exception as e:
            print("Some error", e)
            if (
                "rate_limit" in str(e).lower() or "ratelimit" in str(e).lower()
            ) and attempt < max_retries - 1:
                delay = initial_delay * (2**attempt)  # Exponential backoff

                time.sleep(delay)
                continue
            elif "maximum context length" in str(e).lower():
                messages = messages[:2] + messages[4:]
                continue
            elif "The model is overloaded.".lower() in str(e).lower():
                print(
                    "The model is overloaded. Waiting for 10 seconds before retrying..."
                )
                time.sleep(10)
                continue
            print(f"Error calling LLM: {e} ; Sleeping for 30 seconds")
            time.sleep(30)
            continue


for instance_num, row in enumerate(dataset):

    if args.task in ["intercode", "minictx"]:
        if args.task == "intercode":
            workdirs["intercode"] = "/home/devuser/evaluation/ctf/" + str(
                row["task_id"]
            )
        elif args.task == "minictx":
            dir_dict = {
                "PFR": "pfr",
                "PrimeNumberTheoremAnd": "PrimeNumberTheoremAnd",
                "hep_lean": "HepLean-v4.7",
                "htpi": "HTPILeanPackage4.7",
                "mathlib4": "mathlib4",
                "scilean": "SciLean",
            }
            workdirs["minictx"] = (
                f'/home/devuser/evaluation/test-envs/{dir_dict[row["file"].split("/")[0]]}'
            )

    INSTANCE_DIR = os.path.join(OUTPUT_DIR, f"task_{instance_num}")
    if os.path.exists(INSTANCE_DIR):
        continue
    os.makedirs(INSTANCE_DIR, exist_ok=True)

    def print(*args):
        text = " ".join([str(arg) for arg in args])
        with open(os.path.join(INSTANCE_DIR, "log.txt"), "a") as f:
            f.write(text + "\n")
            f.flush()

    print("")

    user_prompt = get_assisted_prompt(row, args.task)
    # user_prompt = get_cua_prompt(row, args.task)
    if args.task == "minictx" or args.task == "intercode":
        messages = [
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": user_prompt.replace("<<work_dir>>", workdirs[args.task]),
            },
        ]
    else:
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ]

    if args.task == "swebench_mm":
        images = get_images_from_text(user_prompt)
        for image in images:
            messages.append(
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{encode_image(image)}",
                                "detail": "high",
                            },
                        }
                    ],
                }
            )

    env = bench.get_env(row)

    all_tool_calls = []
    all_function_calls = []
    rewards = []

    returnFlag = False

    # Install tree
    env.run_command("apt-get update -y", root=True)
    env.run_command("apt-get install -y tree", root=True)

    for iter_num in range(args.max_iters):

        response = call_llm(
            args.model,
            messages,
            ASSISTED_TOOLS_MAPPING[args.task],
            temperature=args.temperature,
            max_retries=5,
            initial_delay=1,
        )
        # print(response)
        try:
            messages.append(response.choices[0].message)
        except Exception as e:
            print(f"Error appending message: {e}")
            break

        print("🤖🗣️:", response.choices[0].message.content)
        print("🤖🛠️:", response.choices[0].message.tool_calls)
        if response.choices[0].message.tool_calls:
            for tool_call in response.choices[0].message.tool_calls:
                function_name, function_args, function_response = None, None, None
                try:
                    function_name = tool_call.function.name
                    function_args = json.loads(tool_call.function.arguments)
                    if function_name == "bash":
                        if args.task in run_as_root:
                            function_args["root"] = True
                        function_args["workdir"] = workdirs[args.task]
                    function_response = FUNCTIONS[function_name](env, **function_args)
                    if isinstance(function_response, PIL.Image.Image):
                        som_image = env.get_som_image(env.render())
                        messages.append(
                            {
                                "role": "tool",
                                "content": "Screenshot taken. Now, see the screenshot and SoM Image and text of the rendered webpage:",
                                "tool_call_id": tool_call.id,
                            }
                        )
                        messages.append(
                            {
                                "role": "user",
                                "content": [
                                    {
                                        "type": "image_url",
                                        "image_url": {
                                            "url": f"data:image/png;base64,{encode_image(function_response)}",
                                            "detail": "high",
                                        },
                                    }
                                ],
                                "tool_call_id": tool_call.id,
                            }
                        )
                    else:
                        if len(function_response) > 20000:
                            function_response = (
                                function_response[:15000]
                                + "\n\n...truncated"
                                + function_response[-2000:]
                            )
                        messages.append(
                            {
                                "role": "tool",
                                "content": function_response,
                                "tool_call_id": tool_call.id,
                            }
                        )
                except Exception as e:
                    print(f"Error calling function {function_name}: {e}")
                    messages.append(
                        {
                            "role": "tool",
                            "content": str(e),
                            "tool_call_id": tool_call.id,
                        }
                    )
                    function_response = str(e)
                    function_name = "error" if function_name is None else function_name
                    function_args = {} if function_args is None else function_args
                all_tool_calls.append(tool_call)
                all_function_calls.append(
                    {
                        "name": function_name,
                        "args": function_args,
                        "response": function_response,
                    }
                )
                print("💻:", function_name, function_args, function_response)

        else:
            returnFlag = True
        reward = bench.get_reward(env, row)
        print("🏆:", reward)
        rewards.append(reward)

        env.render().save(os.path.join(INSTANCE_DIR, f"screenshot_{iter_num}.png"))
        # breakpoint()
        if returnFlag:
            break
        print("\n\n\n")

    # Save both the tool calls and the rewards
    with open(os.path.join(INSTANCE_DIR, "tool_calls.pkl"), "wb") as f:
        pickle.dump(all_tool_calls, f)
    with open(os.path.join(INSTANCE_DIR, "rewards.json"), "w") as f:
        json.dump(rewards, f)
    try:
        with open(os.path.join(INSTANCE_DIR, "function_calls.json"), "w") as f:
            json.dump(all_function_calls, f)
    except Exception as e:
        print(f"Error dumping function calls: {e}")
        with open(os.path.join(INSTANCE_DIR, "function_calls.pkl"), "wb") as f:
            pickle.dump(all_function_calls, f)

    # Save the messages
    with open(os.path.join(INSTANCE_DIR, "messages.pkl"), "wb") as f:
        pickle.dump(messages, f)

    del env
