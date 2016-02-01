class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|

      t.string :title, null: false
      t.string :username, null: false
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.integer :parent_reply_id


      t.timestamps null: false
    end
    add_index :replies, :user_id
    add_index :replies, :parent_reply_id
  end
end
