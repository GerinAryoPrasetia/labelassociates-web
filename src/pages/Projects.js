import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Project.scss";
import { BUILDINGDATAHOMEPAGE } from "../components/data";
import { Oval } from "react-loader-spinner";
import { Link, NavLink } from "react-router-dom";
import SidebarProjects from "../components/Sidebar/SidebarProjects";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../components/Loading";

const Projects = () => {
  let activeStyle = {
    fontWeight: "bold",
  };
  let inActiveStyle = {
    cursor: "context-menu",
    marginBottom: "70px",
  };
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
  return (
    <div className="container-projects">
      <div class="main-content-projects">
        <Sidebar />
        <div className="slider">
          <div className="slide-project current">
            <div className="list-grid-wrapper-slider">
              <Link to={"/commercial"}>
                <div className="item-project-type a">
                  <img
                    className="fit-image"
                    src="https://iili.io/hhjXbR.jpg"
                    alt="muaro-jambi-labelassociates"
                  />
                  <div class="banner-content">
                    <h3>Commercial</h3>
                  </div>
                </div>
              </Link>
              <Link to={"/residential"}>
                <div className="item-project-type b">
                  <img
                    className="fit-image"
                    src="https://iili.io/hhVnaf.jpg"
                    alt="py-house-labelassociates"
                  />
                  <div class="banner-content">
                    <h3>Residential</h3>
                  </div>
                </div>
              </Link>
              <Link to={"/healthcare"}>
                <div className="item-project-type d">
                  <img
                    className="fit-image"
                    src="https://iili.io/hhwArX.jpg"
                    alt="rsia-labelassociates"
                  />
                  <div class="banner-content">
                    <h3>Healthcare</h3>
                  </div>
                </div>
              </Link>
              <Link to={"/interior"}>
                <div className="item-project-type c">
                  <img
                    className="fit-image"
                    src="https://iili.io/jlRFmG.jpg"
                    alt="fa-bedroom-labelassociates"
                  />
                  <div class="banner-content">
                    <h3>Interior</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar type="main" />
    </div>
  );
};

export default Projects;
