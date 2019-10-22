# == Schema Information
#
# Table name: category_projects
#
#  id          :bigint           not null, primary key
#  category_id :integer          not null
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoryProject < ApplicationRecord
  # --CategoryProject Validations--
  validates :category_id, :project_id, null: false

  # --CategoryProject Associations--
  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :category_id,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :Category
end
