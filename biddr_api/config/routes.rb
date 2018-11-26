Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resource :sessions, only: [:create, :destroy]
      resources :auctions, only:[:create, :show, :index, :destroy] do
        resources :bids, only: [:create]
      end
    end
  end
  
end
