import React from "react";
import { NavLink } from "react-router-dom";

 const NavBar = props => {
  const { currentUser } = props;
  console.log(currentUser)

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof props.onSignOut === "function") {
      props.onSignOut();
    }
  };

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/auctions">
        Auctions
      </NavLink>
      <NavLink exact to="/auctions/new">
        New Auction
      </NavLink>
      {currentUser ? (
        <>
          <span>{currentUser.email}</span>
          <a href="#not-used" onClick={handleSignOutClick}>
            Sign Out
          </a>
        </>
      ) : (
      <NavLink exact to="/session/new">
        Sign In
      </NavLink>
      )}
    </nav>
  );
};
 export default NavBar;