FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv 

# Install python is python3
# RUN ln -s /usr/bin/python3 /usr/bin/python
# Set python3 as python
RUN ln -s /usr/bin/python3 /usr/bin/python

# Create a directory named workspace
RUN mkdir -p /workspace

# Copy the requirements.txt file
COPY setup_files/requirments.txt /workspace/requirements.txt

# COPY the DSBench folder
COPY DSBench /workspace/DSBench

RUN python -m pip install -r /workspace/requirements.txt