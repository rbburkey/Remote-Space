class Space < ActiveRecord::Base
  has_many :reviews
  belongs_to :category
  validates_presence_of :name, :category, :description, :address1, :city, :state, :zipcode, :phone, :website

  geocoded_by :full_address
  after_validation :geocode

  def full_address
    [address1, address2, city, state, zipcode].join(', ')
  end
  
end
