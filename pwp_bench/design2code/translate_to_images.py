from datasets import load_dataset
ds = load_dataset("SALT-NLP/Design2Code")

import os
from tqdm import tqdm

os.makedirs('images', exist_ok=True)
for i,row in tqdm(enumerate(ds['train']), total=len(ds['train'])):
    row['image'].save(f'images/image_{i}.png')

# Now create a data file
data_file = [
    {
        'image_path': f'images/image_{i}.png',
    }
    for i in range(len(ds['train']))
]

import json
with open('data.json', 'w') as f:
    json.dump(data_file, f)