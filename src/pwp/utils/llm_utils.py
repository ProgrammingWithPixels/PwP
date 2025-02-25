import os
import time

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

from PIL import Image

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


import openai
import requests

# OpenAI API Key (Ensure to set your actual API key)
api_key = os.getenv("OPENAI_API_KEY")

# llm_utls.py

# from together import Together
from copy import deepcopy
from typing import List, Optional, Union

from openai import OpenAI
from pydantic import BaseModel


class ActionResponse(BaseModel):
    image_description: str  # Description of the image in 200-400 words
    current_window: str  # Description of the current window
    cursor_position: str  # Description of the cursor position
    previous_action_success: str  # Detailed thoughts on previous action success
    how_to_complete_action: str  # Thoughts on how to complete action
    element_interaction: str  # Element interaction details
    selected_item: str  # Selected item details
    next_action_thoughts: str  # Thoughts on next action
    check_indentation: str  # Indentation details to take care of while writing code
    summary: str  # Summary of action
    action: List[str]  # Single action or list of actions


def generate_response_openai(
    model_name,
    system_message,
    history,
    user_msg,
    is_json=False,
    temperature=0.7,
    max_output_tokens=8192,
):
    if is_json or True:
        temperature = 0.3
    if model_name.lower().find("qwen") != -1:
        client = OpenAI(base_url="http://localhost:8001/v1")
    elif model_name.find("Llama-Vision") != -1:
        client = Together(
            api_key=os.getenv("TOGETHER_API_KEY")
        )
    else:
        client = OpenAI()
    # Build messages array from history
    messages = []
    if system_message:
        messages.append({"role": "system", "content": system_message})
    messages.extend(deepcopy(history))
    # point()
    try:
        messages[-1]["content"].append({"type": "text", "text": user_msg})
    except:
        messages.append(
            {"role": "user", "content": [{"type": "text", "text": user_msg}]}
        )
    # if model_name.find('Llama-Vision')!=-1:
    #     messages[-1]['content'][-1]['text'] += " Make sure to only output json, and nothing else. Format: ```json\n{...}\n```. Remember nothing else."

    try:
        # breakpoint()
        # Dump messages
        # import pickle
        # pickle.dump(messages, open(f"messages_lol.pkl", "wb"))
        # print(model_name)
        generation_function = (
            client.chat.completions.create
            if not is_json
            else client.beta.chat.completions.parse
        )
        # response = client.chat.completions.create(
        response = generation_function(
            model=model_name,
            messages=messages,
            temperature=temperature,
            max_tokens=max_output_tokens,  # Adjust as needed
            frequency_penalty=1.0,
            n=1,
            response_format=ActionResponse if is_json else {"type": "text"},
            # response_format={
            #     "type": ActionResponse if is_json else "text"
            # } if model_name.find('Llama-Vision')==-1 else None
        )
        # breakpoint()
        response_texts = [x.message.content for x in response.choices]
        # breakpoint()

        # Dump the response.usage_metadata
        import uuid

        filename = f"openai_usage_dumps/response_{uuid.uuid4()}_{model_name.replace('/','_')}.pkl"
        import pickle

        try:
            with open(filename, "wb") as f:
                pickle.dump(response.usage, f)
        except:
            ...
        # breakpoint()

        return response
    except Exception as e:
        # breakpoint()
        print(f"Error communicating with OpenAI: {e}")
        return None


import base64
import io


def encode_image(image_path):
    if isinstance(image_path, str):
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode("utf-8")
    elif isinstance(image_path, Image.Image):
        buffered = io.BytesIO()
        image_path.save(buffered, format="PNG")
        return base64.b64encode(buffered.getvalue()).decode("utf-8")
    else:
        raise ValueError(f"Invalid image path or object: {image_path}")


def upload_to_gemini(path, mime_type=None, display_name=None):
    """Uploads the given file to Gemini.

    See https://ai.google.dev/gemini-api/docs/prompting_with_media
    """
    return genai.upload_file(path=path, display_name=display_name)


def generate_response_gemini(model, history, user_msg, model_name=""):
    chat_session = model.start_chat(
        history=history,
    )
    # print(user_msg)
    # breakpoint()
    response = chat_session.send_message(user_msg)

    # Dump the response.usage_metadata
    import uuid

    filename = f"gemini_usage_dumps/response_{uuid.uuid4()}_{model_name}.pkl"
    import pickle

    with open(filename, "wb") as f:
        pickle.dump(response.usage_metadata, f)
    return response


def call_llm(
    model_name,
    system_message=None,
    history=None,
    user_msg=None,
    is_json=False,
    temperature=0.7,
    top_p=0.95,
    top_k=32,
    max_output_tokens=8192,
):
    if model_name.startswith("gemini"):
        # Existing Gemini logic
        generation_config = {
            "temperature": temperature,
            "top_p": top_p,
            "top_k": min(40, top_k) if model_name.find("002") else top_k,
            "max_output_tokens": max_output_tokens,
            "response_mime_type": "text/plain" if not is_json else "application/json",
        }

        model = genai.GenerativeModel(
            model_name=model_name,
            generation_config=generation_config,
            system_instruction=system_message,
        )

        for _ in range(20):
            try:
                response = generate_response_gemini(
                    model, history, user_msg, model_name
                )
                return response
            except Exception as e:
                print("Sleeping", e)
                time.sleep(_**2 + 1)
    # elif model_name.startswith('gpt-'):
    else:
        # OpenAI logic
        for _ in range(20):
            try:
                print(temperature)
                response = generate_response_openai(
                    model_name,
                    system_message,
                    history,
                    user_msg,
                    is_json=is_json,
                    temperature=temperature,
                    max_output_tokens=max_output_tokens,
                )
                break
            except Exception as e:
                print("Sleeping", e)
                time.sleep(_**2 + 1)

        return response

    return None
