class AddTargetDateToGoal < ActiveRecord::Migration[7.0]
  def change
    add_column :goals, :target_date, :date
  end
end
