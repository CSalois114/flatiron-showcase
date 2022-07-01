class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
