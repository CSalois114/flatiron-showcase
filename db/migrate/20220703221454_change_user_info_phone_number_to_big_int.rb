class ChangeUserInfoPhoneNumberToBigInt < ActiveRecord::Migration[7.0]
  def change
    change_column :user_infos, :phone_number, :bigint
  end
end
