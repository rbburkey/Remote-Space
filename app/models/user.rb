class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :reviews
  has_many :spaces
  has_many :favorite_spaces
  has_many :favorites, through: :favorite_spaces, source: :space

  after_create :send_new_user_mail
 def send_new_user_mail
   NewUserEmail.sign_up_email(self).deliver
 end
end
