class CreateBlogPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :blog_posts do |t|
      t.references :showcase, null: false, foreign_key: true
      t.string :title
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
