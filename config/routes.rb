Rails.application.routes.draw do
  use_doorkeeper do 
    skip_controllers :authorizations, :applications,
    :authorized_applications
  end
  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  # get 'home/index'
  root   'home#index'
  get    'home/about'

  namespace :api do
    resources :users, only: %i[create]
    resource :sessions, only: %i[create] do
      post :revoke, on: :member
    end
    resources :recipes do
      put :upload, on: :member
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
