import React from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/candybar" end>
        Candy Bar
      </NavLink>
      <NavLink to="/chips" end>
        Chips
      </NavLink>
      <NavLink to="/crackers" end>
        Crackers
      </NavLink>
    </nav>
  );
}

export default NavBar;