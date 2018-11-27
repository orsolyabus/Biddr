class AuctionSerializer < ActiveModel::Serializer
  attributes :title, :details, :reserved_price, :ends_on, :id
  belongs_to :user
  has_many :bids

  def bids
    object.bids.order(created_at: :desc)
  end
end
