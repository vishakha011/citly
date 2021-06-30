class AddPinToLinks < ActiveRecord::Migration[6.1]
  def change
    add_column :links, :is_pinned, :boolean, default: false
  end
end
