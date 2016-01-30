Rails.application.routes.draw do

root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy]

    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:show, :create, :index]
      resources :questions, only: [:index, :create, :show, :destroy, :update]
    end


end
