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
  validates :artist_id, presence: true, uniqueness: true

  # --Project Associations--
  belongs_to :artist,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

end
