class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]

  def create
    auction = Auction.new auction_params
    auction.user = current_user
    auction.save!
    render json: auction
  end

  def show
    render json: auction
  end

  def index
    auctions = Auction.order created_at: :desc
    render json: auctions
  end

  def destroy
    auction.destroy
    render json: {status: :success}
  end

  private

  def auction
    Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :details, :ends_on, :reserved_price)
  end

end
