FROM p2c_env

ARG DEBIAN_FRONTEND=noninteractive

# Install MySQL and dependencies
RUN apt-get update && \
    apt-get install -y \
    mysql-server \
    mysql-client \
    libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# Configure MySQL to allow remote connections and start on boot
RUN sed -i 's/bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/' /etc/mysql/mysql.conf.d/mysqld.cnf

# Initialize MySQL data directory
RUN mkdir -p /var/run/mysqld && \
    chown -R mysql:mysql /var/run/mysqld && \
    chown -R mysql:mysql /var/lib/mysql

# Copy setup files
COPY setup_files/start.sh /start.sh
COPY minidev/MINIDEV_mysql/BIRD_dev.sql /BIRD_dev.sql
RUN chmod +x /start.sh

RUN apt-get install jq

# Set root password and create database
ENV MYSQL_ROOT_PASSWORD=root


COPY setup_files/setup.sh /setup.sh
RUN chmod +x /setup.sh

RUN mkdir -p /home/devuser/evaluation
RUN chmod -R 777 /home/devuser/evaluation

RUN /setup.sh


# USER devuser

ENV DISPLAY=:1

EXPOSE 8080 3000 3001 3306   


ENTRYPOINT ["/start.sh"]