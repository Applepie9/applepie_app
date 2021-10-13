Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  # get 'home/index'
  root   'home#index'
  get    'home/about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :recipes
end
