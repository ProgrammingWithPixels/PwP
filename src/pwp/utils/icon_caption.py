import os

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
from PIL import Image

from pwp.utils.image_cache import ImageCache

try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except Exception as e:
    pass


def upload_to_gemini(path, mime_type=None):
    file = genai.upload_file(path, mime_type=mime_type)
    print(f"Uploaded file '{file.display_name}' as: {file.uri}")
    return file


def caption_icon(img_path):
    # Create the model

    image_cache = ImageCache()
    text = image_cache.get_cache(Image.open(img_path))
    if text is not None:
        return text

    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
    )

    # TODO Make these files available on the local file system
    # You may need to update the file paths
    files = [
        upload_to_gemini(img_path, mime_type="image/png"),
    ]

    chat_session = model.start_chat(
        history=[
            {
                "role": "user",
                "parts": [
                    files[0],
                ],
            },
        ]
    )
    response = chat_session.send_message(
        "This is a vscode icon. describe the icon in max 3 words"
    )

    image_cache.save_cache(Image.open(img_path), response.text)

    return response.text
