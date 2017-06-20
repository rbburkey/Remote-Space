class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :add_parameters_to_user, if: :devise_controller?



protected
  def add_parameters_to_user
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:first_name, :last_name, :avatar, :avatar_cache, :instagram, :facebook, :location, :occupation)}
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:first_name, :last_name, :avatar, :avatar_cache, :instagram, :facebook, :location, :occupation)}
  end
end
