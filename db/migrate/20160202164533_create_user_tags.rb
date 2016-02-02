class CreateUserTags < ActiveRecord::Migration
  def change
    create_table :user_tags do |t|
      
      t.string :name, null: false

      t.timestamps
    end
  end
end
