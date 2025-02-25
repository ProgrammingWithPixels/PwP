def eval(env, data_row):

    # Now, let's run the evaluation.
    # Save the sol.py file
    env.file_write('/workspace/sol.sql', data_row['SQL'])
    output, _ = env.run_command('python3 /workspace/eval.py')
    if output.strip() == '1':
        return 1
    else:
        return 0
