# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  # --Project Validations--
  validates :title, :description, presence: true
  validates :artist_id, presence: true

  # --Project Associations--
  belongs_to :artist,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Comment

  has_many :appreciations,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Appreciation

  has_and_belongs_to_many :categories

  has_many_attached :images

end
