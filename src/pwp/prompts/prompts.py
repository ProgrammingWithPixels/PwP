def get_cua_prompt(row, task_name):
    if task_name == "humaneval":
        return "Working Directory: /home/devuser/evaluation  ;  Files: program.py\n\nYou are given a python code file, with a function signature and comments describing the goal of function. Your goal is to complete the function by editing the file, such that it runs successfully. You can use any of the tools accessible to you."
    elif task_name == "swebench":
        return """<uploaded_files>
{location}
</uploaded_files>
I've uploaded a python code repository in the directory {location} (not in /tmp/inputs). Consider the following PR description:

<pr_description>
{pr_description}
</pr_description>

Can you help me implement the necessary changes to the repository so that the requirements specified in the <pr_description> are met?

Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use the tools provided or any other existing tool in VSCode IDE, using appropriate keyboard and mouse actions. """.replace(
            "{location}", "/testbed"
        ).replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "swebench_mm":
        return """<uploaded_files>
{location}
</uploaded_files>
I've uploaded a javascript code repository in the directory {location} (not in /tmp/inputs). Consider the following PR description:

<pr_description>
{pr_description}
</pr_description>

Can you help me implement the necessary changes to the repository so that the requirements specified in the <pr_description> are met? I have also included the image referenced in the <pr_description>.

Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use the tools provided or any other existing tool in VSCode IDE, using appropriate keyboard and mouse actions. """.replace(
            "{location}", "/testbed"
        ).replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "design2code":
        return """Working Directory: /home/devuser/evaluation  ;  Files: index.html, image.png

Given an image of website, your goal is to write an equivalent code for it. The image is stored in image.png file in current project directory, that can be accessed using the vscode editor (directly issuing view command would not work). Your goal is to write the HTML code for the website, which looks same as the image. You have to write your code in the file index.html. You are expected to self-refine the image after creating the initila html design. You can use the tools for file editing and writing the code to complete the task. You can access screenshot of the vscode screen, and if you have index.html opened, you can see the live preview of website. Additionally, you can use any of the tools call available to you.

Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use the tools provided or any other existing tool in VSCode IDE, using appropriate keyboard and mouse actions."""
    elif task_name == "chartmimic":
        return """Working Directory: /home/devuser/evaluation  ;  Files: image.png, graph.py

Your goal is to replicate the chart shown in image.png by writing Python code in graph.py. The image is available in the file view. You can execute code iteratively using Jupyter notebook or directly edit graph.py. After each execution, refine your code based on the output visualization.

Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use the tools provided or any other existing tool in VSCode IDE, using appropriate keyboard and mouse actions. """
    elif task_name == "resq":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: varies by task

{row['instruction']}

Use the any tools present in vscode interface and/or tools provided to you to complete the task."""
    elif task_name == "intercode":
        return f"""Working Directory <<work_dir>>;  Files: flag.txt

Capture the flag by analyzing files in the current directory. The query to solve is:
{row['query']}

Use any tools available in the VSCode IDE (such as existing tools or install extensions) or feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to decipher the flag. Save the final flag in flag.txt. Make sure the final flag is enclosed in \picoCTF{...} format."""
    elif task_name == "dsbench":
        description_file = (
            f"pwp_bench/DSBench/DSBench/data_modeling/data/task/{row['name']}.txt"
        )
        with open(description_file, "r") as f:
            description = f.read()
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: submission.csv, solution.py, Solution.ipynb

You are a data scientist. You are given the following task description:\n{description.strip()}\n\nYou can use or install any tool available inside the vscode ide interface to complete the task.

Create a submission.csv following the sample format. You may use solution.py or Solution.ipynb for your code. Feel free to use any of VSCode editor's tools or tools provided to you for completing the task. """
    elif task_name == "minictx":
        return """Working Directory: <<work_dir>>  ;  Files: solve.lean

Prove the last theorem/lemma/proposition: {row['theoremStatement']} in solve.lean using the Lean proof assistant. Use the Lean server visible on the right side panel. Restart the server if prompted. Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to complete the task. """
    elif task_name == "swtbench":
        return f"""Working Directory: /testbed  ;  Files: varies by repository

Create unit tests that reproduce this issue:
{row['problem_statement']}

Write tests that currently fail but will pass when the issue is resolved. Use VSCode tools to edit files and run tests. Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to complete the task. """
    elif task_name == "vscode":
        return f"""Working Directory: /home/devuser/  ;  Files: varies by task

{row['task_description']}

Use the vscode interface to complete the task."""
    elif task_name == "swebench-java":
        return """Working Directory: /testbed  ;  Files: Java repository

<pr_description>
{pr_description}
</pr_description>

Implement changes to meet the PR requirements described in the problem statement. Focus on Java files specifically. Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to complete the task. """.replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "bird":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: sql_query.sql, schema files

SQL Task: {row['question']}

Write your final query in sql_query.sql. Test using the provided database connection (user: devuser, password: devuser). Refer to table schemas in the directory. Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to complete the task. You can use test_sql.py file to test your query. """
    elif task_name == "canitedit":  # Simialr to resq
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: main.py

{row['instruction_descriptive']}

Use the any tools present in vscode interface and/or tools provided to you to complete the task."""
    elif task_name == "nocode":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: varies by task

{row['prompt']}

Use the any tools present in vscode interface and/or tools provided to you to complete the task. Make sure, to save the output in sol.txt file."""


def get_assisted_prompt(row, task_name):
    if task_name == "swebench":
        return """<uploaded_files>
    {location}
    </uploaded_files>
    I've uploaded a python code repository in the directory {location} (not in /tmp/inputs). Consider the following PR description:

    <pr_description>
    {pr_description}
    </pr_description>

    Can you help me implement the necessary changes to the repository so that the requirements specified in the <pr_description> are met?
    I've already taken care of all changes to any of the test files described in the <pr_description>. This means you DON'T have to modify the testing logic or any of the tests in any way!

    Your task is to make the minimal changes to non-tests files in the {location} directory to ensure the <pr_description> is satisfied.

    Follow these steps to resolve the issue:
    1. As a first step, it might be a good idea to explore the repo to familiarize yourself with its structure.
    2. Create a script to reproduce the error and execute it with `python <filename.py>` using the BashTool, to confirm the error
    3. Edit the sourcecode of the repo to resolve the issue
    4. Rerun your reproduce script and confirm that the error is fixed!
    5. Think about edgecases and make sure your fix handles them as well

    Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. Also, you can use multiple tools at a time, to get faster feedback.""".replace(
            "{location}", "/testbed"
        ).replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "swebench_mm":
        return """<uploaded_files>
    {location}
    </uploaded_files>
    I've uploaded a javascript code repository in the directory {location} (not in /tmp/inputs). Consider the following PR description:

    <pr_description>
    {pr_description}
    </pr_description>

    Can you help me implement the necessary changes to the repository so that the requirements specified in the <pr_description> are met? I have also included the image referenced in the <pr_description>.

    I've already taken care of all changes to any of the test files described in the <pr_description>. This means you DON'T have to modify the testing logic or any of the tests in any way!

    Your task is to make the minimal changes to non-tests files in the {location} directory to ensure the <pr_description> is satisfied. 

    Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool.
    """.replace(
            "{location}", "/testbed"
        ).replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "swebench-java":
        return """<uploaded_files>
    {location}
    </uploaded_files>
    I've uploaded a java code repository in the directory {location} (not in /tmp/inputs). Consider the following PR description:

    <pr_description>
    {pr_description}
    </pr_description>

    Implement changes to meet the PR requirements described in the problem statement. Focus on Java files specifically. Feel free to use any of the tools provided to you (such as file editing, bash command) to complete the task.
    
    Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use any of the tools provided to you to complete the task.""".replace(
            "{location}", "/testbed"
        ).replace(
            "{pr_description}", row["problem_statement"]
        )
    elif task_name == "swtbench":
        return f"""Working Directory: /testbed  ;  Files: varies by repository

Create unit tests that reproduce this issue:
{row['problem_statement']}

Write tests that currently fail but will pass when the issue is resolved. Use any of the tools provided to you (such as file editing, bash command) to complete the task.

Your thinking should be thorough and so it's fine if it's very long. Always think before using a tool. You can use any of the tools provided to you to complete the task."""
    elif task_name == "humaneval":
        return """Working Directory: /home/devuser/evaluation  ;  Files: program.py
        
        You are given a python code file, with a function signature and comments describing the goal of function. Your goal is to complete the function by editing the file, such that it runs successfully. You can use any of the tools accessible to you."""
    elif task_name == "design2code":
        return """Working Directory: /home/devuser/evaluation  ;  Files: index.html, image.png

Given an image of website, your goal is to write the HTML code for the website, which looks same as the image. You can access the image using view_original_image tool. Once you edit index.html file, you can see the live preview of it using the view_html_preview tool. After every iteration, try and improve the html code, by comparing the original image, and the preview of your html code. To get high performance it is crucial to repeat the steps atleast 5-10 times."""
    elif task_name == "chartmimic":
        return """Working Directory: /home/devuser/evaluation  ;  Files: image.png, graph.py

Your goal is to replicate the chart shown in image.png by writing Python code in graph.py. You can access the image using view_original_image tool. Make sure to save the output of python file in generated.png (using plt.savefig('generated.png', *args, **kwargs). You can use view_python_preview tool to see the generated.png file. The tool will automatically run your script, and if the generated.png is found, it will be returned. After every iteration, try and improve the code, by comparing the original image, and the preview of your python code. To get high performance it is crucial to repeat the steps atleast 5-10 times."""
    elif task_name == "resq":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: varies by task

{row['instruction']}

Use the any tools provided to you in order to complete the task."""
    elif task_name == "intercode":
        return f"""Working Directory <<work_dir>>  ;  Files: flag.txt

Capture the flag by analyzing files in the current directory. The query to solve is:
{row['query']}

Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to decipher the flag. Save the final flag in flag.txt. Make sure the final flag is enclosed in \picoCTF{...} format."""
    elif task_name == "canitedit":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: main.py

{row['instruction_descriptive']}

Use the any tools present in vscode interface and/or tools provided to you to complete the task."""
    elif task_name == "minictx":
        return f"""Working Directory: <<work_dir>>  ;  Files: solve.lean

Prove the last theorem/lemma/proposition: {row['theoremStatement']} in solve.lean using the Lean proof assistant. Remember, only the last one needs to be completed, and updated in solve.lean file. Feel free to use any of the tools provided to you (such as file editing, bash command) to complete the task. """
    elif task_name == "dsbench":
        description_file = (
            f"pwp_bench/DSBench/DSBench/data_modeling/data/task/{row['name']}.txt"
        )
        with open(description_file, "r") as f:
            description = f.read()
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: sample_submission.csv, solution.py, Solution.ipynb, train/test/val files

You are a data scientist. You are given the following task description:\n{description.strip()}\n\nYour code should create a submission.csv following the sample format. You may use solution.py or Solution.ipynb for your code. Feel free to use any of the tools provided to you for completing the task. """
    elif task_name == "bird":
        return f"""Working Directory: /home/devuser/evaluation  ;  Files: sql_query.sql, schema files

SQL Task: {row['question']}

Write your final query in sql_query.sql. Test using the provided database connection (user: devuser, password: devuser). Refer to table schemas in the directory. Feel free to use any of the tools provided to you (such as file editing, bash command, screenshot, etc) to complete the task. You can use test_sql.py file to test your query."""


def get_prompt_cua_categ1(row, task_name):
    if task_name == "vscode":
        # Use the given task description directly.
        return row["task_description"]

    elif task_name == "humaneval":
        return (
            "You are given program.py containing a function signature and comments. "
            "Complete the function so that it runs successfully. First review the file, "
            "then use your keyboard/mouse actions (e.g. via xdotool commands) to navigate "
            "to the proper location before coding. Finally, write your solution and save the file."
        )

    elif task_name == "swebench":
        return (
            "<uploaded_files>/testbed</uploaded_files>\n"
            "I've uploaded a Python repository in /testbed. Review the PR description below:\n"
            "<pr_description>{}</pr_description>\n"
            "Make only minimal changes to non-test files so that the PR requirements are met. "
            "Use your editor’s keyboard and mouse actions to modify the code."
        ).format(row["problem_statement"])

    elif task_name == "design2code":
        return (
            "You have image.png (a screenshot of a website) and must create an equivalent site. "
            "Write the full HTML code in index.html. Use file actions (append/replace) to draft and then refine your design until it matches the image."
        )

    elif task_name == "chartmimic":
        return (
            "Replicate the chart shown in image.png by writing Python code in graph.py. "
            "Iterate your solution—run the code, compare the generated chart with the original, and refine until they match."
        )

    elif task_name == "resq":
        return ("{}\nComplete the task using the vscode interface.").format(
            row["instruction"]
        )

    elif task_name == "intercode":
        return (
            "Analyze the repository files to capture the flag. Query:\n{}\n"
            "Once you decipher the flag, save it in flag.txt using the format picoCTF{{...}}."
        ).format(row["query"])

    elif task_name == "dsbench":
        # Read the task description from disk (assumed to be in a fixed location)
        description_file = (
            f"pwp_bench/DSBench/DSBench/data_modeling/data/task/{row['name']}.txt"
        )
        with open(description_file, "r") as f:
            description = f.read().strip()
        return (
            "You are a data scientist. Task description:\n{}\n"
            "Develop a solution that produces submission.csv (matching the sample format). "
            "You may work in solution.py or Solution.ipynb."
        ).format(description)

    elif task_name == "minictx":
        return (
            "In solve.lean, prove the final theorem/lemma. Use available tools (including the Lean server, which may need to be restarted) "
            "to complete your proof."
        )

    elif task_name == "swtbench":
        return (
            "An issue has been reported:\n{}\n"
            "Write unit tests within the existing test files that reproduce the problem – they should fail in the current state but pass when fixed. "
            "Use the vscode interface to edit files and run tests."
        ).format(row["problem_statement"])

    elif task_name == "swebench-java":
        return (
            "<uploaded_files>/testbed</uploaded_files>\n"
            "A Java repository has been uploaded in /testbed. Review the PR description below:\n"
            "<pr_description>{}</pr_description>\n"
            "Make minimal changes to Java files so that the PR requirements are met."
        ).format(row["problem_statement"])

    elif task_name == "bird":
        return (
            "Text-to-SQL task:\n{}\n"
            "Write your final SQL query in sql_query.sql. You may test your query using the provided connection "
            "(user: devuser, password: devuser) and refer to the schema files."
        ).format(row["question"])

    elif task_name == "canitedit":
        return (
            "In main.py, follow the instructions below:\n{}\n"
            "Use your editor actions to complete the task."
        ).format(row["instruction_descriptive"])

    elif task_name == "swebench_mm":
        return (
            "<uploaded_files>/testbed</uploaded_files>\n"
            "I've uploaded a JavaScript repository in /testbed. Review the PR description below:\n"
            "<pr_description>{}</pr_description>\n"
            "Implement only the minimal changes needed (non-test files only) to satisfy the requirements."
        ).format(row["problem_statement"])
    elif task_name == "nocode":
        return (
            "Working Directory: /home/devuser/evaluation  ;  Files: varies by task\n"
            "{}"
        ).format(row["prompt"])
    else:
        return "Unrecognized task."
