class CreateIntervals < ActiveRecord::Migration[7.0]
  def change
    create_table :intervals do |t|
      t.date :start_date
      t.date :end_date
      t.integer :current_value
      t.integer :target_value

      t.timestamps
    end
  end
end
