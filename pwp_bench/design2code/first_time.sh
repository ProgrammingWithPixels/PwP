git clone https://github.com/NoviScl/Design2Code.git
cd Design2Code && git checkout 7a575e4c33f417c4be5c64072b8f5798de0d0f99 && cd ..
cp core_files/requirements.txt Design2Code/
cp core_files/visual_score.py Design2Code/Design2Code/metrics/visual_score.py

python translate_to_images.py