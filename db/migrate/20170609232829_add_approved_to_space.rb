class AddApprovedToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :approved, :boolean, default: false
  end
end
