#!/bin/bash

# Define required files in an array
required_files=(
    "Dockerfile"
    "setup_files/setup.py"
    "setup_files/eval.py"
    "DSBench/processed_data"
)

# Check all required files in a loop
missing_files=0
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "$file not found"
        missing_files=1
    fi
done    

if [ $missing_files -eq 1 ]; then
    exit 1
fi

echo "Dataset seems to be setup properly"


