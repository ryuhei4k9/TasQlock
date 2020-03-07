Rails.application.routes.draw do
  root to: 'homes#index'
  resources :homes , only: [:index] # トップページ用のルーティング
  resources :schedules do # スケジュールページ用のルーティング
    collection do
      get 'today'
      get 'calendar'
    end
  end
  post 'schedules/:id/done', to: 'schedules#done', as: 'done'
  
  resources :memos, only: [:new, :create, :destroy]
  post "/memos/create", to: "memos#create"

  resources :users, only: [:new, :create] # ユーザ新規登録用のルーティング
  post   '/login' , to: 'sessions#create' #ログイン処理用のルーティング
  delete '/logout', to: 'sessions#destroy'  #ログアウト処理用のルーティング

end