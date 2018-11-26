import React, { Component } from 'react';
import './App.css';
import WelcomePage from "./WelcomePage";
import AuctionsIndexPage from "./AuctionsIndexPage";
import AuctionShowPage from "./AuctionShowPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomePage/>
        <AuctionsIndexPage/>
        <AuctionShowPage/>

      </div>
    );
  }
}

export default App;
