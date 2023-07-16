class AddRepeatToGoals < ActiveRecord::Migration[7.0]
  def change
    add_column :goals, :repeat, :string
  end
end
