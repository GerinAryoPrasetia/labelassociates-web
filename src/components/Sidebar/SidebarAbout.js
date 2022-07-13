import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarProjects.module.css";

const SidebarAbout = () => {
  return (
    <div class={styles.side_container}>
      <div class={styles.side_content}>
        {/* <h1>LabelAssociates</h1> */}
        <div className={styles.item_container}>
          <p className={styles.side_item}>Philosophy</p>
        </div>
        <div className={styles.item_container}>
          <p className={styles.side_item}>About Label</p>
        </div>

        <div class={styles.item_container}>
          <p className={styles.side_item}>Gallery</p>
        </div>
        <div class={styles.item_container}>
          <p className={styles.side_item}>Team</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarAbout;
