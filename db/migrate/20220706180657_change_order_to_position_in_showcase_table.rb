class ChangeOrderToPositionInShowcaseTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :showcases, :order, :position
  end
end
