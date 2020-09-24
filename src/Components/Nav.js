import React from "react";
import "./Nav.css";
import logo from "../images/Logo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <NavLink activeClassName="active" exact to="/">
        <img src={logo} className="logo" alt="logo" />
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/images">
            Images
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
