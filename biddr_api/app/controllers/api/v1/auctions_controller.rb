class Api::V1::AuctionsController < Api::ApplicationController
  # skip_before_action :verify_authenticity_token

  def create
    auction = Auction.new auction_params
    if auction.save
      render json: auction
    else
      render json: {errors: auction.errors.full_messages}
    end
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
