GOAL:

    1. Every Goal status calculated with: ["inprogress", "done", "failed"].
    2. If target_date didnt pass the Goal status will be "inprogress".
    3. If the target date passed and all interval done Goal status will be "done".
    4. If one of intervals is failed the target_date passed then Goal status will be "failed".
    
INTERVAL:

    1. Every interval has target_value, current_value, target_date and status["inprogress", "failed", "done", "todo"].
    2. If target_date didnt pass the interval status will be "todo".
    3. If current_date and interval date are equal then interval status will be "inprogress".
    4. If current_date passed and current_value < target_value the status will be "failed".
    5. If current_date passed and current_value == target_value the status will be "done".
