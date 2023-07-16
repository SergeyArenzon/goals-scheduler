require 'date'





module GoalHelper


    STATUSES = {
            done: "done",
            inprogress: "inprogress",
            failed: "failed",
            todo: "todo"
        }

    REPEAT = {:daily => 1, :weekly => 7.0, :monthly => 31.0}
    def get_status(goal)
        # target_date isnt outdatedy
        ordered_intervals = goal.intervals.sort_by(&:order)
        
        # date in progress
        if (goal.target_date - Date.today).to_i > 0
            order =  ordered_intervals.size - ((goal.target_date - Date.today) / REPEAT[goal.repeat.to_sym]).to_i
            # last interval not fulfilled
            if ordered_intervals[order].current_value < ordered_intervals[order].target_value || order < ordered_intervals.size
                return STATUSES[:inprogress]
            # last interval fulfilled
            else
                ordered_intervals.each do |interval|
                    return STATUSES[:failed] if interval.current_value < interval.target_value
                end
                return STATUSES[:done]
            end
            
        # date out progress
        else
            ordered_intervals.each do |interval|
                return STATUSES[:failed] if interval.current_value < interval.target_value
            end
            return STATUSES[:done]
        end
    end


    def set_interval_status(goal)
        current_goal_order = goal.intervals.size - ((goal.target_date - Date.today) / REPEAT[goal.repeat.to_sym]).round.to_i
      
        intervals = goal.intervals.as_json

        intervals.each do |interval, index|
            # Passed intervals
            interval["status"] = nil

            if current_goal_order > interval["order"]
                if interval["target_value"] == interval["current_value"]
                    interval["status"] = STATUSES[:done]
                else
                    interval["status"] = STATUSES[:failed]
                end 
            elsif current_goal_order < interval["order"]
                interval["status"] = STATUSES[:todo]
            else
                if interval["target_value"] === interval["current_value"]
                    interval["status"] = STATUSES[:done]
                else
                    interval["status"] = STATUSES[:inprogress]
                end
                
            end 
             
        end

        return intervals
    end
end
