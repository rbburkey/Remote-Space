class AddSpacesToUser < ActiveRecord::Migration
  def change
    add_column :users, :space_id, :integer
  end
end
