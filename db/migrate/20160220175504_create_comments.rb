class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :parent_comment_id
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :answer_id
  end
end
