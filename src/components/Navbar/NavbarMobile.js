import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarMobile.scss";

let activeStyle = {
  fontWeight: "bold",
};

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul>
          <li>
            <NavLink to={"/projects"}>PROJECT</NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
