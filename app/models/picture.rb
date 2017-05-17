class Picture < ActiveRecord::Base
  belongs_to :space

   has_attached_file :image, styles: { medium: "150x150", thumb: "75x75" }
   validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
