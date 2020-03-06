Rails.application.routes.draw do
  root to: 'homes#index'
  resources :homes , only: [:index]
  resources :schedules do
    collection do
      get 'today'
      get 'calendar'
    end
  end
  resources :users, only: [:new, :create]

  post   '/login' , to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end