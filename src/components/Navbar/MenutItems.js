import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const MenutItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            style={{ marginRight: "20px" }}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default MenutItems;
