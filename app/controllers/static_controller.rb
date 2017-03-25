class StaticController < ApplicationController
  def home
    @spaces = Space.all
  end

  def how_it_works
  end

  def contact
  end

  def blog
  end

  def recent_spaces
    @spaces = Space.all
  end

  def popular_spaces
    @spaces = Space.all
  end
end
