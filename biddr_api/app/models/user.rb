class User < ApplicationRecord

  has_many :bids
  has_many :auctions

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, presence: true,
                    uniqueness: true,
                    format: VALID_EMAIL_REGEX

  has_secure_password

end
