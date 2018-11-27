class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!, only: [:create]
  before_action :authorize_user!

  def create
    bid = Bid.new bid_params
    bid.auction = Auction.find params[:auction_id]
    bid.user = current_user
    bid.save!
    render json: bid
  end

  # def index
  #   bids = Bid.where(auction_id: params[:auction_id])order created_at: :desc
  #   render json: bids
  # end

  private

  def bid_params
    params.require(:bid).permit(:offer)
  end

  def authorize_user!
    render json: {status: 403} unless can? :create, Bid
  end
end
