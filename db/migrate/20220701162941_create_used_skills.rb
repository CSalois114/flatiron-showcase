class CreateUsedSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :used_skills do |t|
      t.references :showcase, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
