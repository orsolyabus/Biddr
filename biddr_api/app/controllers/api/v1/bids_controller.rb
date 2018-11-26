class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!, only: [:create]
  before_save :authorize_user!

  def create
    bid = Bid.new bid_params
    bid.auction = Auction.find params[:auction_id]
    bid.user = current_user
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

  def authorize_user!
    render json: {status: 403} unless can? :create, Bid
  end
end
