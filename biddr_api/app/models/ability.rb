class Ability
  include CanCan::Ability

  def initialize(user)
   
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    can( :bid_on, Auction) do |auction|
      user.persisted? && user!= auction.user
    end
  end
end
