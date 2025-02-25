FROM pwp_env



# /home/devuser/evaluation

RUN mkdir -p /home/devuser/evaluation
RUN chmod -R 777 /home/devuser/evaluation

COPY setup_files/start.sh /start.sh
RUN chmod +x /start.sh

USER devuser

COPY requirements.txt /home/devuser/requirements.txt
RUN pip install -r /home/devuser/requirements.txt --no-warn-script-location

RUN code --install-extension ms-python.python
RUN code --install-extension ms-toolsai.jupyter

CMD ["/start.sh"]