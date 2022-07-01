class CreateShowcases < ActiveRecord::Migration[7.0]
  def change
    create_table :showcases do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :order

      t.timestamps
    end
  end
end
