# == Schema Information
#
# Table name: appreciations
#
#  id             :bigint           not null, primary key
#  project_id     :integer          not null
#  appreciator_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Appreciation < ApplicationRecord
  validates :project_id, uniqueness: { scope: :appreciator_id }

  belongs_to :project,
  pimary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :appreciator,
  primary_key: :id,
  foreign_key: :apreciator_id,
  class_name: :User
end
