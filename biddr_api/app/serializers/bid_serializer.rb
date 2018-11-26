class BidSerializer < ActiveModel::Serializer
  attributes :offer, :created_at, :id

  def created_at
    object.created_at.strftime('%Y-%B-%d')
  end
end
