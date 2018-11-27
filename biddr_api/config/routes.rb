Rails.application.routes.draw do
 
  namespace :api do
    namespace :v1 do
      resource :sessions, only: [:create, :destroy]
      resources :users, only: [] do
        get :current, on: :collection
      end
      resources :auctions, only:[:create, :show, :index, :destroy] do
        resources :bids, only: [:create, :index]
      end
    end
  end
  
end
