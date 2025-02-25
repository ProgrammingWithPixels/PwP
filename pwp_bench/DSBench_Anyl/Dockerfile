FROM p2c_env

RUN mkdir -p /home/devuser/evaluation
RUN chown -R devuser:devuser /home/devuser/evaluation

# Copy the requirements.txt file
COPY setup_files/requirments.txt /home/devuser/evaluation/requirements.txt

COPY setup_files/setup.sh /setup.sh
RUN chmod +x /setup.sh


COPY setup_files/start.sh /start.sh
RUN chmod +x /start.sh

USER devuser

RUN pip3 install -r /home/devuser/evaluation/requirements.txt

ENV DISPLAY=:1

EXPOSE 8080 3000

RUN /setup.sh


CMD ["/start.sh"]