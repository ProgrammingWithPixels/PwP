import sys
import os
# SYs path should be of form this files path, .., RES-Q
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..','RES-Q'))

from datasets import load_dataset
from resq.dataset import RESQDataset
from resq.submission import SubmissionEnv
from resq.models import Submission, SubmissionResult


def eval(env, data_row):
    # Get the patch of /home/devuser/evaluation/
    patch = env.run_command('git --no-pager -C . diff --unified --no-color', workdir = '/home/devuser/evaluation')[0]
    # print(patch)
    # patch = data_row['solution_patch']
    patch = patch.replace('\r\n','\n')
    # breakpoint()
    dataset = load_dataset('json', data_files='tasks/resq/data.jsonl')
    dataset = RESQDataset(dataset['train'])

    env = SubmissionEnv(dataset=dataset, temp_dir="temp/", persist=False)

    submission = Submission(id=data_row['id'], patch=patch)
    result = env.step(submission=submission)

    return result.success