FROM p2c_env

# Install required dependencies
RUN apt-get update && \
    apt-get install -y bash python3 python3-pip psmisc bsdmainutils cron imagemagick dnsutils git wget gcc sleuthkit netcat unzip curl gdb poppler-utils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install required pip dependencies
RUN pip3 install pycryptodome

# Load in per-task assets
COPY intercode/data/ctf/task_assets/. /home/devuser/evaluation/ctf/
RUN find /home/dexvuser/evaluation/ctf/ -type d -name solution -prune -exec rm -rf {} \;

# Commit custom file system to determine diffs
COPY intercode/docker/docker.gitignore /home/devuser/evaluation/
RUN mv /home/devuser/evaluation/docker.gitignore /home/devuser/evaluation/.gitignore

# Change Directory
WORKDIR /home/devuser/evaluation/ctf

RUN git config --global user.email "intercode@pnlp.org"
RUN git config --global user.name "intercode"
RUN git init
RUN git add -A
RUN git commit -m 'initial commit'

WORKDIR /home/devuser/evaluation/ctf

COPY setup_files/start.sh /start.sh
RUN chmod +x /start.sh

# Set permissions for /home/devuser/evaluation/ctf
RUN chmod -R 777 /home/devuser/evaluation/ctf

USER devuser
ENV DISPLAY=:1
EXPOSE 8080 3000

CMD ["/start.sh"]