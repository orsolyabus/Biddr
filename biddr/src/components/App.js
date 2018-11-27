import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Session, User } from "./requests";

import NavBar from "./NavBar";
import './App.css';
import WelcomePage from "./WelcomePage";
import AuctionsIndexPage from "./AuctionsIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import SignInPage from "./SignInPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        this.setState({ currentUser });
        console.log(currentUser)
      }

      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { currentUser } = this.state;

    if (this.state.loading) {
      return (
        <div className="App">
          <main>
            <h1>Loading...</h1>
          </main>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div className="App">          
          <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
          <Switch>
            <Route path="/" exact component= {WelcomePage}/>
            <Route path="/session/new" exact render={routeProps => (
                  <SignInPage {...routeProps} onSignIn={this.getUser} />
                )}
              />

            <Route path="/auctions/:id" exact component= {AuctionShowPage}/>
            <Route path="/auctions/" exact component= {AuctionsIndexPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
