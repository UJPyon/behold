Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:create, :show, :index] do
      collection do
        get :search
      end
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :show] do
      resources :appreciations, only: [:create, :destroy, :show]
    end
    resources :appreciations, only: [:index]
    resources :comments, only: [:index, :create, :destroy, :show]
  end

end