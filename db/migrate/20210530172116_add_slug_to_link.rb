class AddSlugToLink < ActiveRecord::Migration[6.1]
  def change
    add_column :links, :slug, :string, null: false
  end
end
