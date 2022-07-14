class ChangeFirstAndLastNameColumnInUsersToNameColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :last_name, :string
    change_column :users, :first_name, :name
  end
end
