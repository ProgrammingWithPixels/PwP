#!/bin/bash

# Start virtual framebuffer
whoami
rm -rf /tmp/.X1-lock
Xvfb :1 -screen 0 1920x1080x24 &
export DISPLAY=:1

# Start openbox window manager
openbox &

dbus-daemon --system --fork
eval $(dbus-launch --sh-syntax)

# Only start VNC if enabled
if [ "${ENABLE_VNC:-true}" = "true" ]; then
    # Set VNC password (can be overridden via environment variable)
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
fi

# Start a simple HTTP server in the user's home directory
cd /home/devuser

# Only start ffmpeg if enabled
if [ "${ENABLE_FFMPEG:-true}" = "true" ]; then
    ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0+0,0 -c:v libx264 -preset ultrafast -tune zerolatency -x264-params "nal-hrd=cbr" -b:v 1M -maxrate 1M -bufsize 2M -g 30 -keyint_min 30 -sc_threshold 0 -f hls -hls_time 1 -hls_list_size 3 -hls_flags delete_segments -hls_segment_type fmp4 -method PUT stream.m3u8 &
fi

python3 -m http.server 8080

# Keep the script running
# tail -f /dev/null
