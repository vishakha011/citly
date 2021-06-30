class AddUrlVisitCountToLinks < ActiveRecord::Migration[6.1]
  def change
    add_column :links, :url_visit_count, :integer, default: 0
  end
end
