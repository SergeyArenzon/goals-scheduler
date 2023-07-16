require 'date'
class IntervalController < ApplicationController
  def index
    render :json => { message: "hello"}
  end

  # def edit
  #   interval_id =  params["id"]
  #   current_value = params["current_value"]
  #   interval = Interval.find(interval_id)
    
  #   interval.update(current_value: current_value)
  #   render json: {message: "Interval was updated", status: 200}, status: 200

  # end
end
