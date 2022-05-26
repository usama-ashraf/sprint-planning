Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'sprints/index'
      get 'sprints/create'
      get 'show/:id', to: 'sprints#show'
      get 'destroy/:id', to: 'sprints#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
