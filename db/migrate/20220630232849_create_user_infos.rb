class CreateUserInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :user_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :email
      t.integer :phone_number
      t.string :location
      t.text :about_me

      t.timestamps
    end
  end
end
