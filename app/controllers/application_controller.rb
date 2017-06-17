class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :add_parameters_to_user, if: :devise_controller?



protected
  def add_parameters_to_user
    devise_parameter_sanitizer.for(:sign_up) << :first_name
    devise_parameter_sanitizer.for(:sign_up) << :last_name
    devise_parameter_sanitizer.for(:account_update) << :first_name
    devise_parameter_sanitizer.for(:account_update) << :last_name
    devise_parameter_sanitizer.for(:sign_up) << :avatar
    devise_parameter_sanitizer.for(:sign_up) << :avatar_cache
    devise_parameter_sanitizer.for(:account_update) << :avatar
    devise_parameter_sanitizer.for(:sign_up) << :instagram
    devise_parameter_sanitizer.for(:sign_up) << :facebook
    devise_parameter_sanitizer.for(:account_update) << :instagram
    devise_parameter_sanitizer.for(:account_update) << :facebook
    devise_parameter_sanitizer.for(:sign_up) << :location
    devise_parameter_sanitizer.for(:sign_up) << :occupation
    devise_parameter_sanitizer.for(:account_update) << :location
    devise_parameter_sanitizer.for(:account_update) << :occupation
  end
end
