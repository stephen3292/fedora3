class CreateQuestionTaggings < ActiveRecord::Migration
  def change
    create_table :question_taggings do |t|

      t.integer :question_id, null: false
      t.integer :question_tag_id, null: false

      t.timestamps
    end
  end
end
