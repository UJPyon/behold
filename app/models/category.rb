# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  # --Category Validations--
  validates :name, presence: true

  # --Category Associations--
  has_and_belongs_to_many :projects
end
