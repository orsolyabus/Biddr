import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Auction } from "./requests";

class AuctionsIndexPage extends Component {
  constructor (props){
    super(props);

    this.state = {
      loading: true ,
      auctions: []
    }
  }

  componentDidMount(){
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
        loading: false
      })
    })
    
  }

  render() {
    if (this.state.loading){
      return(
        <main className="AuctionsIndexPage">
        <h1>Auctions</h1>
        <h3>Loading...</h3>
      </main>
      )
    }

    return (
      <main className="AuctionsIndexPage">
        <h1>Auctions</h1>
        <ul style={{listStyle: "none"}}>
          {this.state.auctions.map(auction => (
            <li key={auction.id}>
              <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionsIndexPage
