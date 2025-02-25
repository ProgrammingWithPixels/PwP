import base64
import io
import json
import os
import re
from io import BytesIO, StringIO

import matplotlib.pyplot as plt
import pandas as pd
import requests
from PIL import Image, ImageDraw, ImageFont

from pwp.utils.icon_caption import caption_icon


def find_png_links(text):
    # Simple pattern to capture URLs that end with .png
    png_pattern = re.compile(r'https?://[^\s"]+\.png', re.IGNORECASE)
    return png_pattern.findall(text)


def get_images_from_text(text):
    return [
        Image.open(BytesIO(requests.get(link).content)) for link in find_png_links(text)
    ]


def get_image_url(pil_img):
    buff = io.BytesIO()
    pil_img.save(buff, format="JPEG")
    base64_str = base64.b64encode(buff.getvalue()).decode("utf-8")

    url = f"data:image/jpeg;base64,{base64_str}"
    return url


import cv2
import numpy as np
from PIL import Image


def add_grid_overlay(image):
    # Convert PIL Image to OpenCV format
    img_cv = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    # Get image dimensions
    height, width = img_cv.shape[:2]

    # Calculate grid cell size
    cell_width = width // 10
    cell_height = height // 10

    # Font settings
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = (
        min(cell_width, cell_height) / 200
    )  # Adjust this value to change text size
    font_color = (255, 255, 255)  # White color
    font_thickness = 2

    # Draw vertical lines and column labels
    for i in range(1, 10):
        x = i * cell_width
        cv2.line(img_cv, (x, 0), (x, height), (255, 255, 255), 1)
        label = chr(64 + i)
        text_size = cv2.getTextSize(label, font, font_scale, font_thickness)[0]
        text_x = x - text_size[0] // 2
        text_y = height - cell_height // 2 + text_size[1] // 2
        # cv2.putText(img_cv, label, (text_x, text_y), font, font_scale, font_color, font_thickness)

    # Draw horizontal lines and row labels
    for i in range(1, 10):
        y = i * cell_height
        cv2.line(img_cv, (0, y), (width, y), (255, 255, 255), 1)
        label = str(i - 1)
        text_size = cv2.getTextSize(label, font, font_scale, font_thickness)[0]
        text_x = cell_width // 2 - text_size[0] // 2
        text_y = y - cell_height // 2 + text_size[1] // 2
        # cv2.putText(img_cv, label, (text_x, text_y), font, font_scale, font_color, font_thickness)

    # Add cell labels
    for row in range(10):
        for col in range(10):
            label = f"{chr(65 + col)} {row}"
            text_size = cv2.getTextSize(label, font, font_scale, font_thickness)[0]
            x = col * cell_width + cell_width // 2 - text_size[0] // 2
            y = row * cell_height + cell_height // 2 + text_size[1] // 2
            cv2.putText(
                img_cv,
                label,
                (x, y),
                font,
                font_scale,
                font_color,
                font_thickness,
                cv2.LINE_AA,
            )

    # Convert back to PIL Image
    img_with_grid = Image.fromarray(cv2.cvtColor(img_cv, cv2.COLOR_BGR2RGB))
    return img_with_grid


def draw_bounding_boxes(
    data_string,
    screenshot_img,
    viewport_size=None,
    add_ids=True,
    bbox_color=None,
    min_width=8,
    min_height=8,
    bbox_padding=0,
    bbox_border=2,
    plot_ids=None,
    win_left_bound=0,
    win_upper_bound=0,
    gap=0,
    caption_icons=True,
):
    """
    min_width and min_height: Minimum dimensions of the bounding box to be plotted.
    """
    # Read CSV data
    for line in range(1, len(data_string.splitlines())):
        try:
            df = pd.read_csv(
                StringIO(data_string), nrows=line, delimiter=",", quotechar='"'
            )
        except:
            data_string = (
                "\n".join(data_string.splitlines()[:line])
                + "\n"
                + "\n".join(data_string.splitlines()[line + 1 :])
            )
    df = pd.read_csv(StringIO(data_string), delimiter=",", quotechar='"')
    df.loc[
        df["TextContent"].apply(lambda x: isinstance(x, str) and ".monaco" in x),
        "TextContent",
    ] = pd.NA
    df.loc[
        df["Class"].apply(lambda x: isinstance(x, str) and "cursor" in x), "TextContent"
    ] = "Cursor"
    df = df.drop_duplicates(
        subset=[col for col in df.columns if col != "Class" and col != "ID"]
    )
    # For all rows that have TextContent as NA, but ARIA is not NA, set textcontent to [Tooltip: {ARIA}]
    df.loc[df["TextContent"].isna() & df["Aria"].notna(), "TextContent"] = (
        "[Tooltip: " + df["Aria"] + "]"
    )

    df["Area"] = df["Width"] * df["Height"]
    # Remove bounding boxes that are clipped.
    b_x, b_y = (
        win_left_bound,
        win_upper_bound,
    )
    if viewport_size is not None:
        df = df[
            (df["Bottom"] - b_y >= 0)
            & (df["Top"] - b_y <= viewport_size["height"])
            & (df["Right"] - b_x >= 0)
            & (df["Left"] - b_x <= viewport_size["width"])
        ]
        viewport_area = viewport_size["width"] * viewport_size["height"]
        # Filter out bounding boxes that too large (more than 80% of the viewport)
        df = df[df["Area"] <= 0.8 * viewport_area]

    # Open the screenshot image
    img = screenshot_img.copy()
    draw = ImageDraw.Draw(img)

    # Load a TTF font with a larger size
    font_path = "media/SourceCodePro-SemiBold.ttf"
    font_size, padding = 16, 2
    font = ImageFont.truetype(font_path, font_size)

    # Create a color cycle using one of the categorical color palettes in matplotlib
    color_cycle = plt.rcParams["axes.prop_cycle"].by_key()["color"]
    bbox_id2visid = {}
    bbox_id2desc = {}
    index = 0
    id2center = {}
    existing_text_rectangles = []
    text_to_draw = []
    # Provide [id] textContent inputs to the model as text.
    text_content_elements = []
    text_content_text = set()  # Store text of interactable elements
    id2semantic = {}

    # Iterate through each row in the CSV and draw bounding boxes
    for _, row in df.iterrows():
        # Check if the row is not interactable or meets specific conditions
        if not (
            row["Interactable"]
            or (
                isinstance(row["TextContent"], str)
                and pd.notna(row["Class"])
                and ("monaco" in row["Class"] or "option-text" in row["Class"])
            )
            or (
                pd.notna(row["Class"])
                and (
                    row["Class"].startswith("mtk") or row["Class"].startswith("cursor")
                )
            )
        ):

            # if not row['Class'].startswith('cursor') and not row["Interactable"] and (not (pd.notna(row["Class"]) and row["Class"].startswith("mtk"))):
            content = ""
            # Add image alt-text to the text representation.
            if row["Element"] == "IMG" and pd.notna(row["Alt"]):
                content += row["Alt"]
            # Add HTML textContent (if any) to the text representation.
            if pd.notna(row["TextContent"]):
                content += (
                    row["TextContent"].strip().replace("\n", "").replace("\t", "")
                )[
                    :200
                ]  # Limit to 200 characters to avoid having too much text

            # Check if the text is a CSS selector
            if content and not (content.startswith(".") and "{" in content):
                # Add elements which are not interactable as StaticText
                if content not in text_content_text:
                    text_content_elements.append(f"[] [StaticText] [{content}]")
                    text_content_text.add(content)
            continue

        try:
            if caption_icons and row["Class"].find("action-item icon") != -1:
                # if row['Class'].find('action-item icon')!=-1:
                # Extract the img at the given lcoation
                # breakpoint()
                icon_image = screenshot_img.crop(
                    (row["Left"], row["Top"] + gap, row["Right"], row["Bottom"] + gap)
                )
                icon_image.save("icon.png")
                row["TextContent"] = caption_icon("icon.png").strip()
                print("Captioned Icon", row["TextContent"])
        except Exception as e:
            print("Error captioning icon:", e)
        if (plot_ids is not None) and (row["ID"] not in plot_ids):
            continue

        unique_id = str(index + 1)
        bbox_id2visid[row["ID"]] = (
            unique_id  # map the bounding box ID to the unique character ID
        )
        top, right, bottom, left, width, height = (
            row["Top"],
            row["Right"],
            row["Bottom"],
            row["Left"],
            row["Width"],
            row["Height"],
        )
        left, right, top, bottom = left - b_x, right - b_x, top - b_y, bottom - b_y

        top += gap
        bottom += gap

        id2center[unique_id] = ((left + right) / 2, (bottom + top) / 2, width, height)

        if (width >= min_width and height >= min_height) or (
            pd.notna(row["Class"]) and row["Class"].startswith("cursor")
        ):
            # Get the next color in the cycle
            color = bbox_color or color_cycle[index % len(color_cycle)]
            draw.rectangle(
                [
                    left - bbox_padding,
                    top - bbox_padding,
                    right + bbox_padding,
                    bottom + bbox_padding,
                ],
                outline=color,
                width=bbox_border,
            )
            bbox_id2desc[row["ID"]] = color

            # Draw the text on top of the rectangle
            if add_ids:
                # Calculate list of possible text positions
                text_positions = [
                    (left - font_size, top - font_size),  # Top-left corner
                    (
                        left,
                        top - font_size,
                    ),  # A little to the right of the top-left corner
                    (right, top - font_size),  # Top-right corner
                    (
                        right - font_size - 2 * padding,
                        top - font_size,
                    ),  # A little to the left of the top-right corner
                    (left - font_size, bottom),  # Bottom-left corner
                    (
                        left,
                        bottom,
                    ),  # A little to the right of the bottom-left corner
                    (
                        right - font_size - 2 * padding,
                        bottom,
                    ),  # A little to the left of the bottom-right corner
                    (
                        left,
                        bottom,
                    ),  # A little to the right of the bottom-left corner
                    (
                        right - font_size - 2 * padding,
                        bottom,
                    ),  # A little to the left of the bottom-right corner
                ]
                text_width = draw.textlength(unique_id, font=font)
                text_height = font_size  # Assume the text is one line

                if viewport_size is not None:
                    for text_position in text_positions:
                        new_text_rectangle = [
                            text_position[0] - padding,
                            text_position[1] - padding,
                            text_position[0] + text_width + padding,
                            text_position[1] + text_height + padding,
                        ]

                        # Check if the new text rectangle is within the viewport
                        if (
                            new_text_rectangle[0] >= 0
                            and new_text_rectangle[1] >= 0
                            and new_text_rectangle[2] <= viewport_size["width"]
                            and new_text_rectangle[3] <= viewport_size["height"]
                        ):
                            # If the rectangle is within the viewport, check for overlaps
                            overlaps = False
                            for existing_rectangle in existing_text_rectangles:
                                if rectangles_overlap(
                                    new_text_rectangle,
                                    existing_rectangle,
                                    padding * 2,
                                ):
                                    overlaps = True
                                    break

                            if not overlaps:
                                break
                        else:
                            # If the rectangle is outside the viewport, try the next position
                            continue
                else:
                    # If none of the corners work, move the text rectangle by a fixed amount
                    text_position = (
                        text_positions[0][0] + padding,
                        text_positions[0][1],
                    )
                    new_text_rectangle = [
                        text_position[0] - padding,
                        text_position[1] - padding,
                        text_position[0] + text_width + padding,
                        text_position[1] + text_height + padding,
                    ]

                existing_text_rectangles.append(new_text_rectangle)
                text_to_draw.append(
                    (new_text_rectangle, text_position, unique_id, color)
                )

                content = ""
                if row["Element"] == "IMG" and pd.notna(row["Alt"]):
                    content += row["Alt"]
                if pd.notna(row["TextContent"]):
                    content += (
                        row["TextContent"].strip().replace("\n", "").replace("\t", "")
                    )[
                        :200
                    ]  # Limit to 200 characters
                selected_tag = (
                    " [**This Item is currently Selected**]"
                    if row.get("Selected", False)
                    else ""
                )
                if content == "":
                    selected_tag = ""

                text_content_elements.append(
                    f"[{unique_id}] [{row['Element']}] [{content}]{selected_tag}"
                )
                id2semantic[unique_id] = (
                    f"[{row['Element']}] element with content [{content}]{selected_tag}"
                )

                if content in text_content_text:
                    # Remove text_content_elements with content
                    text_content_elements = [
                        element
                        for element in text_content_elements
                        if element.strip() != content
                    ]
                text_content_text.add(content)

        index += 1

    for text_rectangle, text_position, unique_id, color in text_to_draw:
        # Draw a background rectangle for the text
        # print(text_rectangle)
        # text_rectangle[1] += 37
        # text_rectangle[3] += 37
        # text_position[1]+=37
        # text_position[3]+=37

        draw.rectangle(text_rectangle, fill=color)
        draw.text(text_position, unique_id, font=font, fill="white")

    content_str = "\n".join(text_content_elements)
    content_str = content_str.replace("[[Tooltip: Views and More Actions...]]", "[]")

    return img, id2center, content_str, id2semantic, df


def rectangles_overlap(rect1, rect2, padding):
    """
    Check if two rectangles overlap.
    Each rectangle is represented as a list [x1, y1, x2, y2].
    """
    return not (
        rect1[2] < rect2[0] + padding
        or rect1[0] > rect2[2] - padding
        or rect1[1] > rect2[3] - padding
        or rect1[3] < rect2[1] + padding
    )


def prepare_log_dir(base_dir):
    os.makedirs(base_dir, exist_ok=True)
    os.makedirs(os.path.join(base_dir, "observations"), exist_ok=True)
    # Create rewards.json
    with open(os.path.join(base_dir, "rewards.json"), "w") as f:
        json.dump([], f)

    return base_dir
