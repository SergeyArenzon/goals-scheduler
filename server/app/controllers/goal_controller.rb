require 'date'
class GoalController < ApplicationController



  def index
    goals = Goal.all
    data = []
    goals.each do |goal|
      data_goal = goal.as_json
      data_goal["status"] = helpers.get_status(goal)
      data_goal["intervals"] =  helpers.set_interval_status(goal)   
      data.push(data_goal)
    end

    render json: {data: data, status: 200}, status: 200

  end

  def create
    target_date = Date.parse(params["target_date"].split("T").first)
    target_value = params["target_value"]
    repeat = params["repeat"]
    description = params["description"]
    start_date = Date.today

    number_of_intervals = 0
    number_of_days = (target_date - start_date).to_i

    case repeat
      when "daily"
        number_of_intervals = number_of_days
      when "weekly"
        number_of_intervals = (number_of_days / 7.0).ceil
      when "monthly"
        number_of_intervals = (number_of_days / 31.0).ceil
      else
    end


  intervals = []

  goal = Goal.create(target_date: target_date, description: description, repeat: repeat)


  number_of_intervals.times { |i|
    intervals.push({order: i, target_value: target_value, current_value: 0, goal_id: goal.id })
  }


  Interval.create(intervals)
  render json: {message: "Goal was created", status: 201}, status: 201
  end


  def edit
    goal_id =  params["id"]
    current_value = params["current_value"].to_i
    goal = Goal.find(goal_id)
    target_date = goal.target_date


    
    created_at = Date.parse(goal.created_at.strftime("%Y-%m-%d"))

    current_interval_order = Date.today.day - created_at.day
    current_interval = goal.intervals.find_by(order: current_interval_order)
    target_value = current_interval.target_value

    if current_value > target_value
      render json: {err: "current_value is greater then target_value", status: 400}, status: 400
    end
    current_interval.current_value = current_value
    current_interval.save
    render json: {message: "Interval was updated", status: 200}, status: 200
  end


  def get_one
    goal_id = params["id"]
    goal = Goal.find(goal_id)
    data_goal = goal.as_json
    data_goal["status"] = helpers.get_status(goal)
    data_goal["intervals"] =  helpers.set_interval_status(goal)   
   
    

    render json: {data: data_goal, status: 200}, status: 200
  end

end


