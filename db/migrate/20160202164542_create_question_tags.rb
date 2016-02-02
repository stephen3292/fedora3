class CreateQuestionTags < ActiveRecord::Migration
  def change
    create_table :question_tags do |t|

      t.string :name, null: false
      
      t.timestamps
    end
  end
end
