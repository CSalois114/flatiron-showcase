class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.references :showcase, null: false, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
