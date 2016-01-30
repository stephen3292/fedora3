class AddUsernameToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :username, :string
  end
end
