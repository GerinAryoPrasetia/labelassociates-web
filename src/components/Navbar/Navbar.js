import React from "react";
import "./Navbar.css";
import { MENUITEMS } from "../data";
import MenutItems from "./MenutItems";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ type }) => {
  let activeStyle = {
    fontWeight: "bold",
  };
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <Link to="/">
          <img
            src="https://iili.io/jT7iT7.gif"
            alt="logo-labelassociates"
            className="img-title"
          />
        </Link>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/scope-of-work"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Scope of Work
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
