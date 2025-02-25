# Xvfb :1 -screen 0 1920x1080x24 &
# export DISPLAY=:1
# openbox &


mkdir -p /home/devuser/evaluation
cd /home/devuser/evaluation

# Install Extensions
code --install-extension ms-python.python
code --install-extension ms-toolsai.jupyter

# Install python dependencies
pip install pandas matplotlib seaborn jupyter 

# Create a new jupyter notebook
# jupyter notebook --generate-config

# Create a new .ipynb file

FILE_CONTENTS='{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "language_info": {
   "name": "python"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}'
# Set the contents of the notebook
echo "$FILE_CONTENTS" > /home/devuser/evaluation/Solution.ipynb

# Open the Notebook
# code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation

# sleep 5
# wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk '{print $1}') -e 0,0,0,1920,1080


