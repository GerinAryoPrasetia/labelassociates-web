import React from "react";
import "./Navbar.css";
import { MENUITEMS } from "../data";
import MenutItems from "./MenutItems";
import { Link, NavLink } from "react-router-dom";
import NavbarLogo from "../NavbarLogo";

const Navbar = ({ type }) => {
  let activeStyle = {
    fontWeight: "bold",
  };
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <Link to="/">
          <NavbarLogo />
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
          PROJECTS
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/scope-of-work"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          SCOPE OF WORK
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
