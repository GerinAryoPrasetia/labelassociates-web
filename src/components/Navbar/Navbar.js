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
    <>
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
      {/* <div className="nav_mobile">
        <nav>
          <div className="menuToggle_mobile">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu_mobile">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Info</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      {/* <div className="nav-mobile">
        <input type="checkbox" id="nav-check-mobile" />
        <div className="nav-header-mobile">
          <div className="nav-title">JoGeek</div>
        </div>
        <div className="nav-btn-mobile">
          <label for="nav-check-mobile">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links-mobile">
          <a href="//github.io/jo_geek" target="_blank">
            Github
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Stackoverflow
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Codepen
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            JsFiddle
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
