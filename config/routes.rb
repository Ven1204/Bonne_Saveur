Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'profile', to: 'pages#profile'

  resources :products, only: [:index, :show] do
    resources :orders, only: [:create]
  end

  # resources :orders, only [] do
  #   member do
  #     patch :accept
  #     patch :reject
  #   end
  # end
end
