class ChangeRepeatFromStringToInteger < ActiveRecord::Migration[7.0]
  def change
    change_column :goals, :repeat, :integer
  end
end
