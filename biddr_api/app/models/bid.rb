class Bid < ApplicationRecord
  validates :offer, numericality: {greater_than: 0}
  validate :greater_than_last_bid
  belongs_to :auction

  private

  def greater_than_last_bid
    if Bid.where(auction_id: auction_id)
      if offer <= Bid.where(auction_id: auction_id).last&.offer
        errors.add(:offer , "offer has to be grater then the last")
      end
    end
  end
end
