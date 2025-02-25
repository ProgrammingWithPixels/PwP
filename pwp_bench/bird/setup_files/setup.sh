# mkdir -p /home/devuser/evaluation
# cd /home/devuser/evaluation

# Install Extensions
code --install-extension ms-python.python
code --install-extension ms-toolsai.jupyter
code --install-extension cweijan.vscode-mysql-client2
# Install python dependencies
pip install pandas matplotlib seaborn jupyter numpy pymysql 


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
echo "$FILE_CONTENTS" > /home/devuser/evaluation/Scratchpad.ipynb



touch /home/devuser/evaluation/main.py

touch /home/devuser/evaluation/sql_query.sql

cat > /workspace/eval.py << 'EOL'
import pymysql
import sys
predicted_sql = open('/home/devuser/evaluation/sql_query.sql').read()
ground_truth = open('/workspace/sol.sql').read()
conn = pymysql.connect(
    host="localhost",
    user="devuser",
    password="devuser",
    database="BIRD"
)
cursor = conn.cursor()
cursor.execute(predicted_sql)
predicted_res = cursor.fetchall()
cursor.execute(ground_truth)
ground_truth_res = cursor.fetchall()
print(1 if set(predicted_res) == set(ground_truth_res) else 0)
EOL

cat > /home/devuser/evaluation/test_sql.py << 'EOL'
import pymysql
import sys
import os
predicted_sql = sys.argv[1] if len(sys.argv) > 1 else print("Please provide a sql query as an argument.")
if os.path.exists(predicted_sql):
    predicted_sql = open(predicted_sql).read()
print('Testing SQL Query:', predicted_sql)
conn = pymysql.connect(
    host="localhost",
    user="devuser",
    password="devuser",
    database="BIRD"
)
cursor = conn.cursor()
cursor.execute(predicted_sql)
predicted_res = cursor.fetchall()
print('Result:', predicted_res)
EOL
