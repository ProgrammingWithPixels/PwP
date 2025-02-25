FROM pwp_env

ARG DEBIAN_FRONTEND=noninteractive



COPY setup_files/start.sh /start.sh
RUN chmod +x /start.sh

RUN mkdir -p /home/devuser/evaluation
RUN chmod -R 777 /home/devuser/evaluation



USER devuser

RUN touch /home/devuser/evaluation/index.html
RUN code --install-extension ms-vscode.live-server

ENV DISPLAY=:1

EXPOSE 8080 3000 3001 5900 6080

CMD ["/start.sh"]