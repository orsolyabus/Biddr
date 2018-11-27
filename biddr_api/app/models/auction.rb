class Auction < ApplicationRecord
  validates :title, :details, presence: true
  has_many :bids
  belongs_to :user
  
end
