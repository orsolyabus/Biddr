import React, { Component } from 'react';
import { Auction } from "./requests";
import { Bid } from "./requests";

import BidList from "./BidList";
import BidForm from './BidForm';

class AuctionShowPage extends Component {
  constructor (props){
    super(props);

    this.state = {
      loading: true ,
      auction: {},
      errors: []
    }
  }
  componentDidMount(){
    const auction_id = this.props.match.params.id;
    Auction.one(auction_id).then(auction => {

      this.setState({
        auction: auction,
        loading: false,
        errors: []
      })
    });
    this.createBid = this.createBid.bind(this)
  };
  

  createBid(params) {
    // console.log("auction id", params.auction_id)
    Bid.create(params).then(bid => {
      if (bid.errors) {
        // console.log(bid.errors)
        this.setState({ 
          auction: this.state.auction,
          loading: false,
          errors: bid.errors
         });
      } else {
        // console.log(bid)
        const {auction, auction: {bids}} = this.state
        // console.log(bids)
        this.setState({
          auction:{
            ...auction,
            bids: [bid].concat(bids),
          },
          errors: []
        })
      }
    });
  }
  render() {
    if (this.state.loading){
      return(
        <main className="AuctionsShowPage">
        
        <h3>Auction Loading...</h3>
      </main>
      )
    }
    if (!this.state.auction) {
      return (
        <main className="AuctionShowPage">
          <h1>auction doesn't exist!</h1>
        </main>
      );
    }
    return (
      <main className="AuctionsShowPage">

        <h1>{this.state.auction.title}</h1>        
        <p>{this.state.auction.details}</p>
        <small>seller: {this.state.auction.user ? this.state.auction.user.email : "None" }</small>
        <p>Reserve price: {this.state.auction.reserved_price}</p>
        <p>Auction ends: {this.state.auction.ends_on}</p>
        <BidForm 
          errors={this.state.errors}
          onSubmit={this.createBid}
          auction_id={this.state.auction.id}
        />
        {/* <p>{console.log(this.state.auction.bids)}</p> */}
        <BidList bids={this.state.auction.bids} />
      </main>
    );
  }
}

export default AuctionShowPage