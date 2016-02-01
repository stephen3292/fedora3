class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|

      t.string :title, null: false
      t.string :username, null: false
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.integer :question_id, null: false


      t.timestamps null: false
    end
  end
end
