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
    can (:create, Bid) do |bid|
      user.persisted? && user!= bid.auction.user
    end
  end
end
