class AddFeatureToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :feature, :string
  end
end
