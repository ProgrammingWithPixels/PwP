#!/bin/bash

# # Start the display and code server
Xvfb :1 -screen 0 1920x1080x24 &
export DISPLAY=:1
openbox &

# # code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation &
# # sleep 10
# # WINDOW_ID=$(wmctrl -l | grep "Code - OSS" | awk '{print $1}')
# # echo $WINDOW_ID
# # wmctrl -i -r $WINDOW_ID -e 0,0,0,1920,1080

cd /home/devuser
ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0+0,0 -c:v libx264 -preset ultrafast -tune zerolatency -x264-params "nal-hrd=cbr" -b:v 1M -maxrate 1M -bufsize 2M -g 30 -keyint_min 30 -sc_threshold 0 -f hls -hls_time 1 -hls_list_size 3 -hls_flags delete_segments -hls_segment_type fmp4 -method PUT stream.m3u8 &
python3 -m http.server 8080 &

VNC_PASSWORD=${VNC_PASSWORD:-vncpassword}
mkdir -p /home/devuser/.vnc
chown -R devuser:devuser /home/devuser/.vnc
x11vnc -storepasswd "$VNC_PASSWORD" /home/devuser/.vnc/passwd
chown devuser:devuser /home/devuser/.vnc/passwd
chmod 600 /home/devuser/.vnc/passwd

# Start VNC server
x11vnc -display :1 -rfbport 5900 -xkb -forever -shared -repeat -capslock -rfbauth /home/devuser/.vnc/passwd &

# Start noVNC (provides HTML5 VNC client)
/usr/share/novnc/utils/launch.sh --vnc localhost:5900 --listen 6080 &

cd /workspace

# Start MySQL service
service mysql start

# Wait for MySQL to be ready
while ! mysqladmin ping -h localhost --silent; do
    sleep 1
done

# Initialize MySQL root password and create database
mysql -u root <<-EOSQL
    ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASSWORD}';
    CREATE DATABASE IF NOT EXISTS BIRD;
    CREATE USER 'devuser'@'localhost' IDENTIFIED BY 'devuser';
    GRANT ALL PRIVILEGES ON BIRD.* TO 'devuser'@'localhost';
    FLUSH PRIVILEGES;
EOSQL

# Import the database schema
mysql -u root -p${MYSQL_ROOT_PASSWORD} BIRD < /BIRD_dev.sql

# su devuser

tail -f /dev/null