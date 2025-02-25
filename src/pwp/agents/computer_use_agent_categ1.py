import argparse
import json
import os
import pickle
import time
import uuid

import litellm
import numpy as np
from p2c_bench import PwPBench
from prompts.cua_prompt import SCREENSHOT_PROMPT, SOM_ENABLED_PROMPT
from prompts.som_prompt_cua import (initial_message, later_messages,
                                    system_message)
from prompts_icml import get_prompt_cua_categ1
from tools.functions_cua_categ1 import FUNCTIONS
from tools.tools import cua_tool_categ1
from utils.llm_utils import encode_image
from utils.utils import get_images_from_text

# litellm.set_verbose=True
parser = argparse.ArgumentParser()
parser.add_argument("--model", type=str, default="claude-3-5-sonnet-20241022")
parser.add_argument("--system_prompt", type=str, default="som_prompt_cua")
parser.add_argument("--output_dir", type=str, default="logs_icml_cua_categ1")
parser.add_argument("--temperature", type=float, default=0.3)
parser.add_argument("--max_iters", type=int, default=20)
parser.add_argument("--task", type=str, default="humaneval")
args = parser.parse_args()

bench = PwPBench(args.task)
dataset = bench.get_dataset()

import importlib

# Load the system prompt from prompts.{args.system_prompt}
system_prompt = importlib.import_module(f"prompts.{args.system_prompt}").system_message

# if args.model.find('claude') != -1:
#     system_prompt = system_prompt.replace(SOM_ENABLED_PROMPT, "")
# system_prompt = system_prompt.replace(SCREENSHOT_PROMPT, "")

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
    "nocode": "/home/devuser/evaluation",
}

# Update workdirs to precise location for some of the benchmarks
import time

time.sleep(5)

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


def add_cache_blocks(messages):
    # Add cache block to last message
    assert "content" in messages[-1]
    if isinstance(messages[-1]["content"], str):
        messages[-1]["content"] = [{"type": "text", "text": messages[-1]["content"]}]
    messages[-1]["content"][-1]["cache_control"] = {"type": "ephemeral"}
    counts = 0
    for i in range(len(messages) - 1, -1, -1):
        if (
            isinstance(messages[i]["content"], list)
            and "cache_control" in messages[i]["content"][-1]
        ):
            counts += 1
            if counts > 4:
                del messages[i]["content"][-1]["cache_control"]
    return messages


def screenshot_message(env):
    if args.model.find("claude") != -1:
        content = [
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{encode_image(env.render().resize((1280, 800)))}",
                    "detail": "high",
                },
            }
        ]
    else:
        # Return a message with the SoM
        main_image = env.render()
        som_image = env.get_som_image(main_image)
        content = [
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{encode_image(main_image)}",
                    "detail": "high",
                },
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{encode_image(som_image[0][0])}",
                    "detail": "high",
                },
            },
            {"type": "text", "text": "SOM Elements:\n" + som_image[0][2]},
        ]
    return content


def call_llm(model, messages, tools, temperature=0.3, max_retries=5, initial_delay=1):
    if model.find("claude") != -1:
        # We need to add extra kwargs
        extra_headers = {"anthropic-beta": "computer-use-2024-10-22"}
    else:
        extra_headers = None
    if model.find("gemini") != -1 or model.find("claude") != -1:
        tools = sanitize_tools_for_gemini(tools)

    messages_new = add_cache_blocks(messages)

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
            print(response.usage)
            with open(
                f'litellm_usage_dumps/{uuid.uuid4()}_{args.model.replace("/","_")}.pkl',
                "wb",
            ) as f:
                pickle.dump(response, f)
            return response
        except Exception as e:
            print("Got Exception in calling LLM:", e)
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
            # breakpoint()
            print(f"Error calling LLM: {e} ; Sleeping for 30 seconds")
            time.sleep(30)
            continue
            # raise  # Re-raise the exception if it's not a rate limit error or we're out of retries


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

    task_description = get_prompt_cua_categ1(row, args.task)
    user_prompt = initial_message.replace("<<task_description>>", task_description)
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

    if args.model.find("gemini") != -1:
        messages = [
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": user_prompt
                + "\nImportant: Use one tool call at a time. Do not use multiple tools at once.",
            },
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

    # TODO: Add screenshot to the messages

    env = bench.get_env(row)
    env.set_assisted_mode_on()

    all_tool_calls = []
    all_function_calls = []
    rewards = []

    returnFlag = False
    env.run_command("apt-get update -y", root=True)
    env.run_command("apt-get install -y tree", root=True)

    for iter_num in range(args.max_iters):
        if iter_num > 0:
            messages.append(
                {
                    "role": "user",
                    "content": [{"type": "text", "text": later_messages}]
                    + screenshot_message(env),
                }
            )
        else:
            messages.append({"role": "user", "content": screenshot_message(env)})

        response = call_llm(
            args.model,
            messages,
            cua_tool_categ1,
            temperature=args.temperature,
            max_retries=5,
            initial_delay=1,
        )
        # print(response)
        # `breakpoint`()
        try:
            messages.append(response.choices[0].message)
        except Exception as e:
            print(f"Error appending message: {e}")
            break

        print("🤖🗣️:", response.choices[0].message.content)
        print("🤖🛠️:", response.choices[0].message.tool_calls)
        # Change rule, that if there is no command issued, it can still be fine.
        returnFlag = False
        if response.choices[0].message.tool_calls:
            start_idx = len(messages)
            for tool_call in response.choices[0].message.tool_calls:
                function_name, function_args, function_response = None, None, None
                try:
                    function_name = tool_call.function.name
                    if function_name == "execution_done":
                        returnFlag = True
                        break
                    function_args = json.loads(tool_call.function.arguments)
                    if function_name == "bash":
                        if args.task in run_as_root:
                            function_args["root"] = True
                        function_args["workdir"] = workdirs[args.task]
                    function_response = FUNCTIONS[function_name](env, **function_args)
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
                time.sleep(0.5)
            if args.model.find("gemini") != -1:
                messages = (
                    messages[:start_idx]
                    + [m for m in messages[start_idx:] if "tool_call_id" in m]
                    + [m for m in messages[start_idx:] if "tool_call_id" not in m]
                )
        else:
            # returnFlag = True
            pass
        reward = bench.get_reward(env, row)
        print("🏆:", reward)
        rewards.append(reward)

        env.render().save(os.path.join(INSTANCE_DIR, f"screenshot_{iter_num}.png"))
        # breakpoint()
        # print('Here is what we have in the settings.json file:', env.run_command("cat /home/devuser/.config/Code - OSS/User/settings.json"))
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
