class CreatePartners < ActiveRecord::Migration[7.0]
  def change
    create_table :partners do |t|
      t.references :showcase, null: false, foreign_key: true
      t.references :user, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
