# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  text            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#

class User < ApplicationRecord
  # --User Validations--
  validates :email, presence: true, uniqueness: true
  validates :session_token, :password_digest, :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  # --User Associations--
  has_many :projects,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :Project

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment

  has_many :appreciations_given,
  primary_key: :id,
  foreign_key: :appreciator_id,
  class_name: :Appreciation

  has_many :appreciated_projects,
  through: :appreciations_given,
  source: :project

  has_many :appreciations_received,
  through: :projects,
  source: :appreciations

  has_one_attached :avatar
  has_one_attached :banner

  # --User Class & Instance Methods--
  attr_reader :password

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end

  def is_password?(password) 
    BCrypt::Password.new(password_digest).is_password?(password) 
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token 
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token 
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token! 
    self.session_token = self.class.generate_session_token
    self.save! 
    self.session_token
  end

end
