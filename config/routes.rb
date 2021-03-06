Rails.application.routes.draw do
  # トップページ
  root to: 'homes#index'
  # トップページ用のルーティング
  resources :homes , only: [:index] 
  # スケジュールページ用のルーティング
  resources :schedules , only: [:new, :create, :edit, :update, :destroy] do
    collection do
      get 'today'
      get 'calendar'
    end
  end
  post 'schedules/:id/done', to: 'schedules#done', as: 'done'
  
  resources :memos, only: [:new, :create, :destroy]
  post "/memos/create", to: "memos#create"

  #ユーザ新規登録用のルーティング
  resources :users, only: [:new, :create]
  #ログイン処理用のルーティング
  post   '/login' , to: 'sessions#create'
  #ログアウト処理用のルーティング
  delete '/logout', to: 'sessions#destroy'

end