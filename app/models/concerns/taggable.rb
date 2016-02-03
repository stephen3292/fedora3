
module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :question_taggings, :as => :question_taggable
    has_many :question_tags, :through => :question_taggings
  end

  def tag(name)
    name.strip!
    tag = QuestionTag.where(name: name).first_or_create
    self.question_taggings.where(question_tag_id: tag.id).first_or_create
    tag
  end

  def tag_names
    tags.collect(&:name)
  end
end
