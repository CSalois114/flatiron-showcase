class AddPreviewImageToShowcase < ActiveRecord::Migration[7.0]
  def change
    add_column :showcases, :preview_image, :string
  end
end
