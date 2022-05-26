Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # sprints
      get 'sprints/index'
      post 'sprints/create', to: 'sprints#create'
      get 'show/:id', to: 'sprints#show'
      delete 'destroy/:id', to: 'sprints#destroy'
      # tickets
      get 'tickets/index'
      post 'tickets/create', to: 'sprints#create'
      get 'show/:id', to: 'tickets#show'
      delete 'destroy/:id', to: 'tickets#destroy'
    end
  end
  root 'home#index'
  get '*path' => 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
