class StaticController < ApplicationController
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


end
