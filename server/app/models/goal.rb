class Goal < ApplicationRecord
    has_many :intervals
    enum repeat: [ :daily, :weekly, :monthly ]


end
