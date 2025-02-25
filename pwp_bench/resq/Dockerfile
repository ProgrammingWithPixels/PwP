FROM p2c_env

COPY requirements.txt .
RUN pip install -r requirements.txt

# make /home/devuser/evaluation and set permissions
RUN mkdir -p /home/devuser/evaluation
RUN chown -R devuser:devuser /home/devuser/evaluation
RUN chmod -R 777 /home/devuser/evaluation


USER devuser

ENV DISPLAY=:1

EXPOSE 8080 3000

RUN code --install-extension ms-python.python
RUN code --install-extension ms-toolsai.jupyter

