Rails.application.routes.draw do
mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :posts do
    resources :comments
  end
  devise_for :users, controllers: { registrations: 'registrations' }
  resources :subscribers
  resources :spaces do
    put :favorite, on: :member
    resources :reviews, except: [:index]
    resources :pictures
    resources :comments


    collection do
      get 'search'
    end
  end

  match "/404", :to => "errors#not_found", :via => :all

  root 'static#home'

  match "contact" => "contacts#create", :via => :post, :as => :create_contact
  get '/pending' => "static#pending"
  get '/users/:id' => 'static#user_profile'
  get '/spaces2' => "spaces#index2"
  get '/howitworks' => "static#howitworks"
  get '/contact' => "contacts#new"
  get '/blog' => "static#blog"
  get '/home1' => "static#home1"
  get '/map' => "spaces#map"
  get '/my_spaces' => "spaces#my_spaces"
  get '/my_reviews' => "reviews#my_reviews"
  get '/favorites' => "spaces#favorites"


end
