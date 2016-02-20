Rails.application.routes.draw do

root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy]

    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy, :show]
      resources :question_tags, only: [:show, :index]
      resources :users do
        resources :user_tags, only: [:index, :create]
      end
      resources :questions, only: [:index, :create, :show, :destroy, :update] do
        resource :question_tags, only: [:index, :create]
        resources :answers, only: [:index, :create] do
          resources :comments, only: [:index, :create]
        end
      end
      resources :answers, only: [:update, :destroy]
      get "search", to: "utils#search"
    end


end
