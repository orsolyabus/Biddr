import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';
import WelcomePage from "./WelcomePage";
import AuctionsIndexPage from "./AuctionsIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import SignInPage from "./SignInPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route path="/" exact component= {WelcomePage}/>
          <Route path="/session/new" exact render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />

          <Route path="/auctions/:id" exact component= {AuctionShowPage}/>
          <Route path="/auctions/" exact component= {AuctionsIndexPage}/>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
