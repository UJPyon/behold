Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:create, :show, :index] do
      resources :appreciations, only: [:index]
      collection do
        get :search
      end
    end
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :show] do
      # resources :appreciations, only: [:create, :destroy]
    end
    resources :comments, only: [:index, :create, :destroy, :show]
  end

  get 'api/users/:user_id', to: 'api/users/#likes'
  post 'api/projects/:project_id/appreciations', to: 'api/projects/#like'
  delete 'api/projects/:project_id/appreciations/:appreciation_id', to: 'api/projects/#unlike'

end