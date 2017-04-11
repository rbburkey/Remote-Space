class AddUrlsToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :facebook_url, :string
    add_column :spaces, :twitter_url, :string
    add_column :spaces, :instagram_url, :string
  end
end
