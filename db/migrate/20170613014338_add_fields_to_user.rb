class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :instagram, :string
    add_column :users, :facebook, :string
    add_column :users, :location, :string
    add_column :users, :occupation, :string
  end
end
