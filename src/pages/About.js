import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SidebarAbout from "../components/Sidebar/SidebarAbout";
import styles from "../styles/About.module.css";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";

const About = () => {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }
  const sideClickedOne = () => {
    setIsActiveOne(!isActiveOne);
    setIsActiveTwo(false);
    setIsActiveThree(false);
  };

  const sideClickedTwo = () => {
    setIsActiveTwo(!isActiveTwo);
    setIsActiveOne(false);
    setIsActiveThree(false);
  };

  const sideClickedThree = () => {
    setIsActiveThree(!isActiveThree);
    setIsActiveTwo(false);
    setIsActiveOne(false);
  };
  return (
    <div className={styles.container_about}>
      <Navbar />
      <div className={styles.main_content_about}>
        <div class={styles.side_container}>
          <div class={styles.side_content}>
            {/* <h1>LabelAssociates</h1> */}
            <div
              className={styles.item_container}
              onClick={() => sideClickedOne()}
            >
              <p
                className={
                  isActiveOne ? styles.side_item_active : styles.side_item
                }
              >
                Philosophy
              </p>
            </div>
            <div
              className={styles.item_container}
              onClick={() => sideClickedTwo()}
            >
              <p
                className={
                  isActiveTwo ? styles.side_item_active : styles.side_item
                }
              >
                About Label
              </p>
            </div>
            <Link to={"/team"}>
              <div
                className={styles.item_container}
                onClick={() => sideClickedThree()}
              >
                <p
                  className={
                    isActiveThree ? styles.side_item_active : styles.side_item
                  }
                >
                  Meet The Team
                </p>
              </div>
            </Link>
            {/* <NavLink to="/residential" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div
                  className={styles.item_container}
                  // onMouseEnter={(e) => showSubMenuTwo(e)}
                  // onMouseLeave={(e) => hideSubMenuTwo(e)}
                >
                  <p
                    className={
                      isActive ? styles.side_item_active : styles.side_item
                    }
                  >
                    About Label
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/healthcare" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div class={styles.item_container}>
                  <p
                    className={
                      isActive ? styles.side_item_active : styles.side_item
                    }
                  >
                    Meet The Team
                  </p>
                </div>
              )}
            </NavLink> */}
          </div>
        </div>
        {/* Content */}
        <div className={styles.container_content_about}>
          <div className={styles.content_about}>
            <h3
              className={isActiveOne ? styles.active_title : undefined}
              style={{ fontSize: "14px" }}
            >
              Philosophy
            </h3>
            <p style={{ fontSize: "12px" }}>
              We will do the design according to the client's requirements and
              will have a diverse character. the way we define the character is
              as simple as looking at who and where we will design. From this
              philosophy we hope to produce designs that can continue to evolve
              with the times and the environment
            </p>
          </div>
          <div className={styles.content_about}>
            <h3
              className={isActiveTwo ? styles.active_title : undefined}
              style={{ fontSize: "14px" }}
            >
              About Label
            </h3>
            <ul style={{ fontSize: "12px" }}>
              <li>
                Is an architecture and design bureau based in Bandung City,
                Indonesia. We provide architectural and interior design planning
                on a wide scale covering residential, commercial and retail. We
                will design each project through an analytical process that will
                help design products according to the context of the built
                environment, resulting in a strong and efficient design
                solution.
              </li>
              <li>
                We are committed to delivering results with high design
                standards, based on appropriate directions from our clients so
                that client expectations can be properly met.
              </li>
            </ul>
          </div>
          <div className={styles.content_about_team}>
            <h3
              className={isActiveThree ? styles.active_title : undefined}
              style={{ fontSize: "12px" }}
            >
              Meet The Team
            </h3>
            <div className={styles.container_team}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <ul style={{ fontSize: "12px" }}>
                    <li>
                      Head Architect – Ludowikus Panduhadi Pangestu S.Ars.
                      Lulusan Arsitek UNPAR, focus on Design Architecture,
                      interest : Exploring Architecture Building
                    </li>
                    <li>
                      General Manager | Architect – Fariz Ikhsansyah S.Ars, IAI.
                      Lulusan Arsitek UNPAR, focus on Architectural Technical
                      and details, interest : Technology
                    </li>
                    <li>
                      Head Operation | Architect – M Iza Wildan S.Ars Lulusan
                      Arsitek UNPAR, focus on business development, interest :
                      Tennis & Bonsai
                    </li>
                  </ul>
                  <Link to={"/team"}>
                    <button className={styles.btn_team}>Meet the Team</button>
                  </Link>
                </div>
                <img
                  src="https://iili.io/jl7hfp.jpg"
                  alt="meet-the-team-label"
                  className={styles.image_team}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
