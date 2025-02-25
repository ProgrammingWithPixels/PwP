FROM pwp_env

ARG DEBIAN_FRONTEND=noninteractive

# Switch to devuser before conda operations
USER devuser
WORKDIR /home/devuser

############# Install Miniconda #############
RUN wget 'https://repo.anaconda.com/miniconda/Miniconda3-py311_23.11.0-2-Linux-x86_64.sh' -O miniconda.sh \
    && bash miniconda.sh -b -p $HOME/miniconda3 \
    && rm miniconda.sh

# Add conda to PATH and initialize
ENV PATH=$HOME/miniconda3/bin:$PATH
SHELL ["/bin/bash", "-c"]
RUN source $HOME/miniconda3/etc/profile.d/conda.sh \
    && conda init bash \
    && conda config --append channels conda-forge
#############################################

# COPY the environment.yaml file to the container
COPY --chown=devuser:devuser ChartMimic/environment.yaml /home/devuser/
RUN set -x && \
    source /home/devuser/miniconda3/etc/profile.d/conda.sh && \
    conda config --append channels conda-forge && \
    conda env create -f /home/devuser/environment.yaml -n chartmimic && \
    conda clean -afy

USER root
COPY setup_files/setup.sh /setup.sh
RUN chmod +x /setup.sh

COPY setup_files/start.sh /start.sh
RUN chmod +x /start.sh

USER devuser

ENV DISPLAY=:1

EXPOSE 8080 3000 3001

RUN source $HOME/miniconda3/etc/profile.d/conda.sh \
    && conda activate chartmimic \
    && /setup.sh

# Add conda activate chartmimic to the .bashrc file
RUN echo "conda activate chartmimic" >> /home/devuser/.bashrc

# CMD ["/start.sh"]
