class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :reviews
  has_many :spaces
  has_many :favorite_spaces
  has_many :favorites, through: :favorite_spaces, source: :space
  has_many :comments

  after_create :send_new_user_mail
 def send_new_user_mail
   Notifier.sign_up_email(self).deliver
 end

 has_attached_file :avatar, styles: { thumb: "170x100#", profile: "250x250#", review: "75x75#" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
