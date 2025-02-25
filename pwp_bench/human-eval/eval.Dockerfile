FROM ubuntu:22.04

# Install python3
RUN apt-get update && apt-get install -y python3

# Set python3 as python
RUN ln -s /usr/bin/python3 /usr/bin/python