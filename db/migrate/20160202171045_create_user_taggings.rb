class CreateUserTaggings < ActiveRecord::Migration
  def change
    create_table :user_taggings do |t|

      t.integer :user_id, null: false
      t.integer :user_tag_id, null: false

      t.timestamps

    end
  end
end
