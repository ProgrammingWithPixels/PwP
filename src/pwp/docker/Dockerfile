# Use the official Ubuntu 22.04 base image
FROM ubuntu:22.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install basic utilities
RUN apt-get update && \
    apt-get install -y \
    wget \
    curl \
    gnupg \
    software-properties-common \
    lsb-release \
    git \
    build-essential \
    unzip \
    xvfb \
    ffmpeg \
    zip \
    scrot \          
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxrandr2 \
    libxss1 \
    libxtst6 \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    jq \
    x11vnc \
    xvfb \
    novnc \
    net-tools \
    && rm -rf /var/lib/apt/lists/*

# Install Python
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv 

# Install python is python3
RUN ln -s /usr/bin/python3 /usr/bin/python

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Chromium
RUN apt-get update && \
    apt-get install -y chromium-browser

# Install Playwright
RUN npm install -g playwright

RUN apt-get install -y openbox

# Build argument to choose VSCode version
ARG VSCODE_TYPE=opensource
# Default to opensource, can be overridden during build

# Install VSCode based on build argument
RUN if [ "$VSCODE_TYPE" = "official" ]; then \
    wget -qO- "https://go.microsoft.com/fwlink/?LinkID=760868" -O vscode.deb && \
    apt-get install -y ./vscode.deb; \
    else \
    # Copy and set up opensource version \
    mkdir -p /opt/VSCode-linux-x64; \
    fi

# Only copy opensource version if selected
COPY VSCode-linux-x64 /opt/VSCode-linux-x64

# Create appropriate symlink based on version
RUN if [ "$VSCODE_TYPE" = "official" ]; then \
    ln -s /usr/bin/code /usr/local/bin/code; \
    else \
    ln -s /opt/VSCode-linux-x64/bin/code-oss /usr/local/bin/code; \
    chmod +x /usr/local/bin/code; \
    fi

# Ensure the 'code' binary is executable

RUN apt-get update && apt-get install -y xdotool xclip wmctrl imagemagick


RUN groupadd --gid 1001 devuser && \
    useradd --uid 1001 --gid devuser --shell /bin/bash --create-home devuser


# Change ownership of the /workspace directory to the non-root user
RUN mkdir -p /workspace && chown -R devuser:devuser /workspace

# Specially Done for swebench
RUN if [ -d /testbed ]; then \
chmod -R 755 /testbed && \
chown -R devuser:devuser /testbed; \
else \
echo "/testbed does not exist, skipping permission change."; \
fi

RUN if [ -d /opt/VSCode-linux-x64/ ]; then \
chmod -R 755 /opt/VSCode-linux-x64/ && \
chown -R devuser:devuser /opt/VSCode-linux-x64/; \
else \
echo "/opt/VSCode-linux-x64/ does not exist, skipping permission change."; \
fi

# Copy the startup script into the container
COPY start.sh /usr/local/bin/start.sh

# Make the script executable
RUN chmod +x /usr/local/bin/start.sh

RUN apt-get update && apt-get install -y dbus dbus-x11
# Switch to the non-root user
USER devuser

# RUN code --install-extension /opt/VSCode-linux-x64/extensions/fileview.vsix

RUN code --install-extension ms-python.python
RUN code --install-extension ms-toolsai.jupyter
# This is to ensure compatibility with current version of VS Code. If you use latest VSCode binary, the next line is not needed.
RUN code --install-extension ms-python.vscode-pylance@2023.6.40

# Switch back to root
USER root

# Expose ports for development tools
EXPOSE 8080 3000 3001 5900 6080

# Set up the working directory
WORKDIR /workspace

ENV DISPLAY=:1

# Define the default command
# CMD [ "bash" ]
CMD ["/usr/local/bin/start.sh"]