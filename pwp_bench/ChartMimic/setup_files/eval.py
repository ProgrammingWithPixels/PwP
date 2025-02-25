import os
import sys
os.environ["PROJECT_PATH"] = os.path.join(os.path.dirname(__file__), "..", "ChartMimic")
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "ChartMimic"))
from chart2code.utils.evaluator.text_evaluator import TextEvaluator
from chart2code.utils.evaluator.chart_type_evaluator import ChartTypeEvaluator
from chart2code.utils.evaluator.legend_evaluator import LegendEvaluator
from chart2code.utils.evaluator.grid_evaluator import GridEvaluator
from chart2code.utils.evaluator.color_evaluator import ColorEvaluator
from chart2code.utils.evaluator.layout_evaluator import LayoutEvaluator

def eval(env, data_row):
    # Let's copy the python file from container to here

    # Curr_dir
    curr_dir = os.getcwd()
    # Chdir to ChartMimic
    os.chdir(os.path.join(os.path.dirname(__file__), "..", "ChartMimic"))
    # Copy the python file from container to here
    env.copy_from_container("/home/devuser/evaluation/graph.py", "graph.py")

    # Edit graph.py by removing plt.show() and adding plt.savefig('generated.pdf')
    content = open('graph.py').read().replace('plt.show()', '').replace('plt.close()', '').replace('plt.savefig', '# plt.savefig') + '\n\nplt.savefig("generated.pdf")'
    
    with open('graph.py', 'w') as f:
        f.write(content)
    
    # Now let's run the evaluation
    text_evaluator = TextEvaluator(use_position=False, use_axs=False)
    chart_type_evaluator = ChartTypeEvaluator()
    legend_evaluator = LegendEvaluator(use_position=True)
    grid_evaluator = GridEvaluator()
    color_evaluator = ColorEvaluator()
    layout_evaluator = LayoutEvaluator()

    gt_file = os.path.join(os.path.split(__file__)[0],'../../../',data_row["GroundTruthFigureCode"])
    try:
        text_evaluator(generation_code_file='graph.py',golden_code_file=gt_file)
    except Exception as e:
        print('Error in text_evaluator:', e)
    try:
        chart_type_evaluator(
            generation_code_file='graph.py',
            golden_code_file=gt_file
        )
    except Exception as e:
        print('Error in chart_type_evaluator:', e)
    try:
        color_evaluator(
            generation_code_file='graph.py',
            golden_code_file=gt_file
        )
    except Exception as e:
        print('Error in color_evaluator:', e)
    try:
        layout_evaluator(
            generation_code_file='graph.py',
            golden_code_file=gt_file
        )
    except Exception as e:
        print('Error in layout_evaluator:', e)

    

    return_dict = {
        "text_evaluator": text_evaluator.metrics,
        "chart_type_evaluator": chart_type_evaluator.metrics,
        "legend_evaluator": legend_evaluator.metrics,
        "grid_evaluator": grid_evaluator.metrics,
        "color_evaluator": color_evaluator.metrics,
        "layout_evaluator": layout_evaluator.metrics
    }
    # breakpoint()
    
    # Chdir back to curr_dir
    os.chdir(curr_dir)
    return return_dict
