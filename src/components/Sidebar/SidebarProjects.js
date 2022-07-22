import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import {
  SIDEDATACOMMERCIAL,
  SIDEDATAHEALTH,
  SIDEDATAINTERIOR,
  SIDEDATARESIDENTIAL,
} from "../data";
import styles from "./SidebarProjects.module.css";

const SidebarProjects = ({ name, collab, type, loc, status, area }) => {
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const [displayOne, setDisplayOne] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const [displayThree, setDisplayThree] = useState(false);
  const [displayFour, setDisplayFour] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);
  const showSubMenuOne = (e) => {
    e.preventDefault();
    setDisplayOne(true);
    setDisplayContent(false);
  };
  const hideSubMenuOne = (e) => {
    e.preventDefault();
    setDisplayOne(false);
    setDisplayContent(true);
  };
  const showSubMenuTwo = (e) => {
    e.preventDefault();
    setDisplayTwo(true);
    setDisplayContent(false);
  };
  const hideSubMenuTwo = (e) => {
    e.preventDefault();
    setDisplayTwo(false);
    setDisplayContent(true);
  };
  const showSubMenuThree = (e) => {
    e.preventDefault();
    setDisplayThree(true);
    setDisplayContent(false);
  };
  const hideSubMenuThree = (e) => {
    e.preventDefault();
    setDisplayThree(false);
    setDisplayContent(true);
  };
  const showSubMenuFour = (e) => {
    e.preventDefault();
    setDisplayFour(true);
    setDisplayContent(false);
  };
  const hideSubMenuFour = (e) => {
    e.preventDefault();
    setDisplayFour(false);
    setDisplayContent(true);
  };
  return (
    <>
      <div className={styles.side_container}>
        <div class={styles.side_content}>
          {/* <h1>LabelAssociates</h1> */}
          {/* {data.name} */}
          <NavLink to="/residential" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                className={styles.item_container}
                onMouseEnter={(e) => showSubMenuTwo(e)}
                onMouseLeave={(e) => hideSubMenuTwo(e)}
              >
                <div
                  className={displayTwo ? styles.showing : styles.not_showing}
                >
                  {SIDEDATARESIDENTIAL.map((data) => (
                    <Link to={`/project/${data.id}`} key={data.id}>
                      <p>{data.name}</p>
                    </Link>
                  ))}
                </div>
                <p
                  className={
                    isActive ? styles.side_item_active : styles.side_item
                  }
                >
                  Residential
                </p>
              </div>
            )}
          </NavLink>
          <NavLink to="/commercial" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                onMouseEnter={(e) => showSubMenuOne(e)}
                onMouseLeave={(e) => hideSubMenuOne(e)}
                className={styles.item_container}
              >
                <div
                  className={displayOne ? styles.showing : styles.not_showing}
                >
                  {SIDEDATACOMMERCIAL.map((data) => (
                    <Link to={`/project/${data.id}`} key={data.id}>
                      <p>{data.name}</p>
                    </Link>
                  ))}
                </div>
                <p
                  className={
                    isActive ? styles.side_item_active : styles.side_item
                  }
                >
                  Commercial
                </p>
              </div>
            )}
          </NavLink>
          <NavLink to="/healthcare" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                class={styles.item_container}
                onMouseEnter={(e) => showSubMenuThree(e)}
                onMouseLeave={(e) => hideSubMenuThree(e)}
              >
                <div
                  className={displayThree ? styles.showing : styles.not_showing}
                >
                  {SIDEDATAHEALTH.map((data) => (
                    <Link to={`/project/${data.id}`} key={data.id}>
                      <p>{data.name}</p>
                    </Link>
                  ))}
                </div>
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
          <NavLink to="/interior" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                class={styles.item_container}
                onMouseEnter={(e) => showSubMenuFour(e)}
                onMouseLeave={(e) => hideSubMenuFour(e)}
              >
                <div
                  className={displayFour ? styles.showing : styles.not_showing}
                >
                  {SIDEDATAINTERIOR.map((data) => (
                    <Link to={`/project/${data.id}`} key={data.id}>
                      <p>{data.name}</p>
                    </Link>
                  ))}
                </div>
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
        <div
          className={
            displayContent
              ? styles.detail_container
              : styles.detail_container_hidden
          }
        >
          <p>
            <span style={{ fontStyle: "italic" }}> Project's Name</span>
          </p>
          <p className={styles.detail_content}>{name}</p>
          <p>
            <span style={{ fontStyle: "italic" }}> In Colaboration With</span>
          </p>
          <p className={styles.detail_content}>{collab}</p>
          <p>
            <span style={{ fontStyle: "italic" }}> Type</span>
          </p>
          <p className={styles.detail_content}>{type}</p>
          <p>
            <span style={{ fontStyle: "italic" }}> Area</span>
          </p>
          <p className={styles.detail_content}>{area}</p>
          <p>
            <span style={{ fontStyle: "italic" }}> Location</span>
          </p>
          <p className={styles.detail_content}>{loc}</p>
          <p>
            <span style={{ fontStyle: "italic" }}> Status</span>
          </p>
          <p className={styles.detail_content}>{status}</p>
          {/* <div className={styles.fake_shadow}></div> */}
        </div>
      </div>
    </>
  );
};

export default SidebarProjects;
