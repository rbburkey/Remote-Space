module SpacesHelper

  def checked(area)
    @space.feature.nil? ? false : @space.feature.match(area)
  end

end
