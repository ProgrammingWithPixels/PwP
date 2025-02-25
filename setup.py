import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="programming-with-pixels",
    version="0.1.0",
    author="PWP Team",
    author_email="pranjal2041@gmail.com",
    description="Programming with Pixels (PwP) - A framework for computer-use software engineering agents",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ProgrammingWithPixels/pwp",
    project_urls={
        "Bug Tracker": "https://github.com/ProgrammingWithPixels/pwp/issues",
        "Documentation": "https://www.programmingwithpixels.com",
        "Source Code": "https://github.com/ProgrammingWithPixels/pwp",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "Topic :: Software Development :: Libraries",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    package_data={
        "pwp": ["docker/**/*", "prompts/**/*", "tools/**/*", "env/**/*"],
    },
    include_package_data=True,
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
        "imagehash",
    ],
    extras_require={
        "gpu": [
            "torch>=1.9.0",
            "torchvision>=0.10.0",
        ],
        "dev": [
            "black",
            "isort",
            "pytest",
            "pytest-cov",
            "twine",
            "build",
        ],
    },
) 