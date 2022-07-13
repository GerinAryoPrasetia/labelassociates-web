import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SidebarAbout from "../components/Sidebar/SidebarAbout";
import "../styles/Project.scss";
import styles from "../styles/About.module.css";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar/Sidebar";

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
    <div className="container-projects">
      <div class="main-content-projects">
        <SidebarAbout />
        <div className="slider">
          <div className="slide-project current">
            <div className="list-grid-wrapper-slider">
              <div className="item-about a">
                <img
                  className="fit-image"
                  src="https://iili.io/wlHEBt.jpg"
                  alt="philosophy-labelassociates"
                  // style={{ opacity: "0.7" }}
                />
                <div class="banner-content-about">
                  <h3>PHILOSPHY</h3>
                  <p>
                    We will do the design according to the client's requirements
                    and will have a diverse character. the way we define the
                    character is as simple as looking at who and where we will
                    design. From this philosophy we hope to produce designs that
                    can continue to evolve with the times and the environment
                  </p>
                </div>
              </div>

              <div className="item-about b">
                <img
                  className="fit-image"
                  src="https://iili.io/wlH0QI.jpg"
                  alt="py-house-labelassociates"
                />
                <div class="banner-content-about">
                  <h3>ABOUT LABEL</h3>
                  <p>
                    Is an architecture and design bureau based in Bandung City,
                    Indonesia. We provide architectural and interior design
                    planning on a wide scale covering residential, commercial
                    and retail. We will design each project through an
                    analytical process that will help design products according
                    to the context of the built environment, resulting in a
                    strong and efficient design solution.
                  </p>
                  <p>
                    We are committed to delivering results with high design
                    standards, based on appropriate directions from our clients
                    so that client expectations can be properly met.
                  </p>
                </div>
              </div>
              <Link to={"/team"}>
                <div className="item-about c">
                  <img
                    className="fit-image"
                    src="https://iili.io/waKxI4.jpg"
                    alt="fa-bedroom-labelassociates"
                  />
                  <div class="banner-content-about-secondary">
                    <h3>TEAM</h3>
                  </div>
                </div>
              </Link>
              <a href="https://www.instagram.com/label.associates/">
                <div className="item-about d">
                  <img
                    className="fit-image"
                    src="https://iili.io/wlHlhN.jpg"
                    alt="rsia-labelassociates"
                  />
                  <div class="banner-content-about-secondary">
                    <h3>GALLERY</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar type="main" />
    </div>
  );
};

export default About;
