
GOAL:
    *Every Goal status calculated with: ["inprogress", "done", "failed"]

    *If target_date didnt pass the Goal status will be "inprogress".

    *If the target date passed and all interval done Goal status will be "done".

    *If one of intervals is failed the target_date passed then Goal status will be "failed"

INTERVAL:
    *Every interval has target_value, current_value, target_date and status["inprogress", "failed", "done", "todo"].
    
    *If target_date didnt pass the interval status will be "todo"
    *If current_date and interval date are equal then interval status will be "inprogress"
    *If current_date passed and current_value < target_value the status will be "failed".
    *If current_date passed and current_value == target_value the status will be "done".
