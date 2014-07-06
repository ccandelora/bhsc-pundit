Rails.application.routes.draw do
  root :to => "visitors#index"
  devise_for :users
  resources :users

  resources :reservation_weeks do
    get 'pick', on: :collection
  end

  resources :reservations do
    get 'pick', on: :collection
    post 'lookup', on: :collection
  end
end
