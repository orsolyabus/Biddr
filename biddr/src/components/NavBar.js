import React from "react";
import { NavLink } from "react-router-dom";

 const NavBar = props => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/auctions">
        Auctions
      </NavLink>
      {/* <NavLink exact to="/auctions/new">
        New Auction
      </NavLink> */}
      <NavLink exact to="/session/new">
        Sign In
      </NavLink>
    </nav>
  );
};
 export default NavBar;