Rails.application.routes.draw do
  get 'recipes/index'
  get 'recipes/show'
  devise_for :users

  devise_scope :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
  end

  # get 'home/index'
  root   'home#index'
  get    'home/about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
