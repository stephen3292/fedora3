class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.integer :value, null: false
      t.timestamps

    end
    add_index :votes, :answer_id
    add_index :votes, [:answer_id, :user_id], unique: true 
  end
end
