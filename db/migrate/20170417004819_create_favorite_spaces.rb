class CreateFavoriteSpaces < ActiveRecord::Migration
  def change
    create_table :favorite_spaces do |t|
      t.integer :space_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
