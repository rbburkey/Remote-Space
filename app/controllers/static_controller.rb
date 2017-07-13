class StaticController < ApplicationController
  before_action :set_user, only: [:user_profile]

  def home
    @spaces = Space.all
    @posts = Post.all
    @subscriber = Subscriber.new
  end

  def home1
  end

  def map
    @spaces = Space.all
    @hash = Gmaps4rails.build_markers(@spaces) do |space, marker|
      marker.lat space.latitude
      marker.lng space.longitude
      marker.json({:id => space.id })
      marker.infowindow render_to_string(:partial => "/spaces/infowindow", :locals => { :object => space})
    end
  end

  def user_profile

    @spaces = @user.favorites
  end

  def how_it_works
  end

  def contact
    @contact = Contact.new
  end

  def blog
  end

  def recent_spaces
    @spaces = Space.all
  end

  def popular_spaces
    @spaces = Space.all
  end

  def user_profile
    @users = User.all
  end

  def not_approved
  end

  private

  def set_user
    @user = User.find(params[:id])
  end


end
