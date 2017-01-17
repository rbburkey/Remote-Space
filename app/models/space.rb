class Space < ActiveRecord::Base
  has_many :reviews
  belongs_to :category
  validates_presence_of :name, :category, :description, :address1, :city, :state, :zipcode, :phone, :website

  def self.search(params)
    spaces = Space.where(category_id: params[:category].to_i)
    spaces = spaces.where("name like ? or description like ?", "%#{params[:search]}%", "%#{params[:search]}%") if params[:search].present?
    spaces = spaces.near(params[:location], 20) if params[:location].present?
    spaces
  end
end
