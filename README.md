# Biddr

E-bay clone

Assignment to be done Hackaton style in 10 hours max.

## Part 1: Rails Web API – Auction & Bid CRUD

Build a Rails JSON API. Based on the wireframes, at the bottom of this page, choose which columns you will need for your application's models.

* Implement create, show, index and destroy actions for Auctions.
* Auctions should have many Bids.
* Implement the create action for Bids.
You should use a tool like Postman to manually test your API at this point.

## Part 2: Rails Web API – User Authentication

Add user authentication.

Implement a SessionsController with a create action to allows users to login with a session cookie and a destroy action to logout.
* Only authenticated users can create & destroy Auctions.
* Only authenticated users can create bids.
* Associate users to auctions and bids they create.
* Disallow users from bidding on their own auctions.
## Part 3: React Client – Public Routes

Build a React Client for the JSON API. Use the wireframes below as a guide.

* Implement a WelcomePage, an AuctionsIndexPage and AuctionsShowPage. Only the AuctionsShowPage is illustrated in the wireframes.
* Create a NavBar to navigate between pages.
## Part 4: React Client – Authenticated Routes

Implement a SignInPage. Add a link to it to the NavBar.
* Only show the SignInPage link if the user is not signed in. Otherwise, display their name.
* Redirect users that are not signed in to the SignInPage when they attempt to access any route that requires authentication.
## Part 5: React Client – Auctions & Bidding

* Implement the AuctionsNewPage shown below to allow authenticated users to create bids.
* Implement the ability to bid on auctions from the AuctionsShowPage.
