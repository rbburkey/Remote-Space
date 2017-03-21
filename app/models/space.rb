class Space < ActiveRecord::Base
  before_save do
    self.feature.gsub!(/[\[\]\"]/, "") if attribute_present?("feature")
  end

  has_many :reviews
  belongs_to :category
  validates_presence_of :name, :category, :description, :address1, :city, :state, :zipcode, :phone, :website
  geocoded_by :full_address
  after_validation :geocode

  has_attached_file :image, styles: { medium: "260x220>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  def full_address
    [address1, address2, city, state, zipcode].join(', ')
  end


  def self.search(params)
    spaces = Space.where(category_id: params[:category].to_i)
    spaces = spaces.where("name like ? or description like ?", "%#{params[:search]}%", "%#{params[:search]}%") if params[:search].present?
    spaces = spaces.near(params[:location], 20) if params[:location].present?
    spaces
  end


end
