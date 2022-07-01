Rails.application.routes.draw do
  resources :videos
  resources :repositories
  resources :skills
  resources :blog_posts
  resources :projects
  resources :showcases
  resources :social_links
  resources :user_infos
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
