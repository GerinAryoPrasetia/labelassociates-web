import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarProjects.module.css";

const SidebarProjects = () => {
  const [displayOne, setDisplayOne] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const [displayThree, setDisplayThree] = useState(false);
  const [displayFour, setDisplayFour] = useState(false);
  const showSubMenuOne = (e) => {
    e.preventDefault();
    setDisplayOne(true);
  };
  const hideSubMenuOne = (e) => {
    e.preventDefault();
    setDisplayOne(false);
  };
  const showSubMenuTwo = (e) => {
    e.preventDefault();
    setDisplayTwo(true);
  };
  const hideSubMenuTwo = (e) => {
    e.preventDefault();
    setDisplayTwo(false);
  };
  const showSubMenuThree = (e) => {
    e.preventDefault();
    setDisplayThree(true);
  };
  const hideSubMenuThree = (e) => {
    e.preventDefault();
    setDisplayThree(false);
  };
  const showSubMenuFour = (e) => {
    e.preventDefault();
    setDisplayFour(true);
  };
  const hideSubMenuFour = (e) => {
    e.preventDefault();
    setDisplayFour(false);
  };
  return (
    <div class={styles.side_container}>
      <div class={styles.side_content}>
        {/* <h1>LabelAssociates</h1> */}
        <NavLink to="/commercial">
          {({ isActive }) => (
            <div
              onMouseEnter={(e) => showSubMenuOne(e)}
              onMouseLeave={(e) => hideSubMenuOne(e)}
              className={styles.item_container}
            >
              <p
                className={
                  isActive ? styles.side_item_active : styles.side_item
                }
              >
                Commercial
              </p>
              <div className={displayOne ? styles.showing : styles.not_showing}>
                <p>ASDFDAFFD</p>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink to="/residential">
          {({ isActive }) => (
            <div
              className={styles.item_container}
              onMouseEnter={(e) => showSubMenuTwo(e)}
              onMouseLeave={(e) => hideSubMenuTwo(e)}
            >
              <p
                className={
                  isActive ? styles.side_item_active : styles.side_item
                }
              >
                Residential
              </p>
              <div className={displayTwo ? styles.showing : styles.not_showing}>
                <p>ASDFDAFFD</p>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink to="/healthcare">
          {({ isActive }) => (
            <div class={styles.item_container}>
              <p
                className={
                  isActive ? styles.side_item_active : styles.side_item
                }
              >
                Healthcare
              </p>
            </div>
          )}
        </NavLink>
        <NavLink to="/interior">
          {({ isActive }) => (
            <div class={styles.item_container}>
              <p
                className={
                  isActive ? styles.side_item_active : styles.side_item
                }
              >
                Interior
              </p>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarProjects;
