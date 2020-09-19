import React from "react";
import "./Nav.css";
import logo from "../images/Logo.svg";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <nav className="navbar">
      <NavLink activeClassName="active" exact to="/">
        <img src={logo} className="logo" alt="logo" />
      </NavLink>
      <form className="searchbar">
        <input type="text" className="search-input" />
        <button className="search-btn">
          <FaSearch className="search-icon" />
        </button>
      </form>
      <ul className="nav-links">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/pictures">
            Pictures
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
