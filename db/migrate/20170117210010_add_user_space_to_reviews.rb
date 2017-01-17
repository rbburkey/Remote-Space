class AddUserSpaceToReviews < ActiveRecord::Migration
  def change
    add_reference :reviews, :space, index: true
    add_reference :reviews, :user, index: true
  end
end
