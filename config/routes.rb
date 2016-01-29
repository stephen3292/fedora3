Rails.application.routes.draw do

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:show, :index]
      resources :questions, only: [:index, :create, :show, :destroy, :update] do
        resources :answers, only: [:index, :create, :show]
      end
      resources :answers, only: [:update, :destroy]
    end

  root to: 'static_pages#root'
end
