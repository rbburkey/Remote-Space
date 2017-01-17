class AddCategoryIndexToSpaces < ActiveRecord::Migration
  def change
    add_reference :spaces, :category, index: true 
  end
end
