Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # sprints
      get 'sprints/index'
      post 'sprints/create', to: 'sprints#create'
      get 'sprints/select_options', to: 'sprints#select_options'
      # tickets
      get 'tickets/index'
      post 'tickets/create', to: 'tickets#create'
    end
  end
  root 'home#index'
  get '*path' => 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
