class User < ApplicationRecord
  has_secure_password

  has_many :schedules

  validates :email, presence: true, uniqueness: true


end
