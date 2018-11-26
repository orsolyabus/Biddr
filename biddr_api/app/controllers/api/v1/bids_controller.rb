class Api::V1::BidsController < Api::ApplicationController
  def create
    bid = Bid.new bid_params
    bid.auction = Auction.find params[:auction_id]
    if bid.save
      render json: bid
    else
      render json: {errors: bid.errors.full_messages}
    end
  end

  private

  def bid_params
    params.require(:bid).permit(:offer)
  end
end
