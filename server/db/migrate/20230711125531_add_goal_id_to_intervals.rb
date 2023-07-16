class AddGoalIdToIntervals < ActiveRecord::Migration[7.0]
  def change
    add_column :intervals, :goal_id, :integer
    add_index :intervals, :goal_id
    add_foreign_key :intervals, :goals
  end
end
