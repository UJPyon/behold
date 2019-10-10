# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  project_id :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  # --Project Validations--
  validates :body, :author_id, :project_id, presence: true

  # --Comment Associations--
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

end
