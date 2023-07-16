Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #  GOAL
  post "/goals", to: "goal#create"
  get "/goals", to: "goal#index"
  get "/goals/:id", to: "goal#get_one"
  post '/goals/:id', to: 'goal#edit'


  # 
  # post '/intervals/:id', to: 'interval#edit'
end
