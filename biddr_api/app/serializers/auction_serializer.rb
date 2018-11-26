class AuctionSerializer < ActiveModel::Serializer
  attributes :title, :details, :reserved_price, :ends_on, :id
  belongs_to :user
  has_many :bids
end
