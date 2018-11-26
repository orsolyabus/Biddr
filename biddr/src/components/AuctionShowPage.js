import React, { Component } from 'react';
import { Auction } from "./requests";

class AuctionShowPage extends Component {
  constructor (props){
    super(props);

    this.state = {
      loading: true ,
      auction: {}
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      console.log(auction)
      this.setState({
        auction: auction,
        loading: false
      })
    })
    
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
        
      </main>
    );
  }
}

export default AuctionShowPage