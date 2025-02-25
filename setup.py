import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="pwp",
    version="0.1.0",
    author="PWP Team",
    author_email="pranjal2041@gmail.com",
    description="Programming with Pixels (PwP) package",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ProgramminWithPixels/pwp",
    project_urls={
        "Bug Tracker": "https://github.com/ProgramminWithPixels/pwp/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.6",
    install_requires=[
        "google-generativeai",
        "docker",
        "pillow",
        "opencv-python",
        "tqdm",
        "numpy",
        "pandas",
        "matplotlib",
        "requests",
        "litellm",
        "datasets",
        "gdown",
    ],
) 