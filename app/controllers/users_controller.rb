class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @spaces = @user.favorites
  end
end
