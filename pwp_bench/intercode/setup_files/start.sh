#!/bin/bash

Xvfb :1 -screen 0 1920x1080x24 &
export DISPLAY=:1
openbox &



cd /home/devuser
ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0+0,0 -c:v libx264 -preset ultrafast -tune zerolatency -x264-params "nal-hrd=cbr" -b:v 1M -maxrate 1M -bufsize 2M -g 30 -keyint_min 30 -sc_threshold 0 -f hls -hls_time 1 -hls_list_size 3 -hls_flags delete_segments -hls_segment_type fmp4 -method PUT stream.m3u8 &
python3 -m http.server 8080