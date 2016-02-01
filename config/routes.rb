Rails.application.routes.draw do

root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy]

    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy, :show]
      resources :users
      resources :questions, only: [:index, :create, :show, :destroy, :update] do
        resources :answers, only: [:index, :create] do
          resources :replies, only: [:index, :create]
        end
      end
      resources :answers, only: [:update, :destroy]
    end


end
