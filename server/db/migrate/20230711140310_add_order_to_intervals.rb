class AddOrderToIntervals < ActiveRecord::Migration[7.0]
  def change
    add_column :intervals, :order, :integer
  end
end
