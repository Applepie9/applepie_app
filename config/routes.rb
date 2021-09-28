Rails.application.routes.draw do
  devise_for :users
  # get 'home/index'
  root   'home#index'
  get    '/users/sign_up',   to: 'devise/registrations#new'
  get    '/users/sign_in',   to: 'devise/sessions#new'
  post   '/users/sign_in',   to: 'devise/sessions#create'
  delete '/users/sign_out',  to: 'devise/sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
