class Space < ActiveRecord::Base
  has_many :reviews
  belongs_to :category
  validates_presence_of :name, :category, :description, :address1, :city, :state, :zipcode, :phone, :website 
end
