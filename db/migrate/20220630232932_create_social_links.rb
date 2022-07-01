class CreateSocialLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :social_links do |t|
      t.references :user_info, null: false, foreign_key: true
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
