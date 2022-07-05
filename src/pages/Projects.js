import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Project.scss";
import { BUILDINGDATAHOMEPAGE } from "../components/data";
import { MutatingDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import SidebarProjects from "../components/Sidebar/SidebarProjects";

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
    }, 700);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <MutatingDots
          color="#B5A377"
          secondaryColor="#B5A377"
          height={180}
          width={180}
        />
      </div>
    );
  }
  return (
    <div className="container-projects">
      <Navbar type="main" />
      <div class="main-content-projects">
        <SidebarProjects />
        <div className="list-grid-wrapper">
          <div className="item-project-type a">
            <img
              className="fit-image"
              src={BUILDINGDATAHOMEPAGE[0].image_url[0]}
              alt="an-house-labelassociates"
            />
            <div class="banner-content">
              <h3>Commercial</h3>
            </div>
          </div>
          <div className="item-project-type b">
            <img
              className="fit-image"
              src={BUILDINGDATAHOMEPAGE[1].image_url}
              alt="ba-house-labelassociates"
            />
            <div class="banner-content">
              <h3>Residential</h3>
            </div>
          </div>
          <div className="item-project-type d">
            <img
              className="fit-image"
              src={BUILDINGDATAHOMEPAGE[2].image_url}
              alt="an-house-labelassociates"
            />
            <div class="banner-content">
              <h3>Healthcare</h3>
            </div>
          </div>
          <div className="item-project-type c">
            <img
              className="fit-image"
              src={BUILDINGDATAHOMEPAGE[3].image_url}
              alt="td-bakehouse-labelassociates"
            />
            <div class="banner-content">
              <h3>Interior</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
