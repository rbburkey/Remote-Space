class StaticController < ApplicationController
  def home
    @spaces = Space.all
  end

  def about
  end

  def contact
  end

  def recent_spaces
    @spaces = Space.all
  end
end
