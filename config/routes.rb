Rails.application.routes.draw do
  resources :skills
  resources :partners
  resources :showcases
  resources :used_skills
  resources :videos
  resources :repositories
  resources :social_links
  resources :user_infos
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end