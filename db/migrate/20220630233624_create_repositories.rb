class CreateRepositories < ActiveRecord::Migration[7.0]
  def change
    create_table :repositories do |t|
      t.references :showcase, null: false, foreign_key: true
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
