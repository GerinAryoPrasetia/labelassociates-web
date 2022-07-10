import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, NavLink } from "react-router-dom";
import {
  BUILDINGDATAHOMEPAGE,
  LISTDATACOMMERCIAL,
} from "../../components/data";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarProjects from "../../components/Sidebar/SidebarProjects";
import SliderCommercial from "../../components/Slider/SliderCommercial";
import SliderResidential from "../../components/Slider/SliderResidential";
import "../../styles/Project.scss";

const Residential = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
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
      <Navbar />
      <div class="main-content-projects">
        <Sidebar />
        <SliderResidential />
        {/* <div className="list-grid-wrapper">
              {LISTDATACOMMERCIAL.map((data, index) =>
                data.map((d, idx) => (
                  <Link to={`/project/${d.id}`}>
                    <div className="item-project-type a">
                      <img
                        className="fit-image"
                        src={d.image_url}
                        alt="an-house-labelassociates"
                      />
                      <div class="banner-content">
                        <h3>{d.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))
              )} */}
        {/* <Link to={"/project/1"}>
                <div className="item-project-type a">
                  <img
                    className="fit-image"
                    src={BUILDINGDATAHOMEPAGE[0].image_url[0]}
                    alt="an-house-labelassociates"
                  />
                  <div class="banner-content">
                    <h3>TD Bakehouse</h3>
                  </div>
                </div>
              </Link>
              <div className="item-project-type b">
                <img
                  className="fit-image"
                  src={BUILDINGDATAHOMEPAGE[1].image_url}
                  alt="ba-house-labelassociates"
                />
                <div class="banner-content">
                  <h3>CD Soho</h3>
                </div>
              </div>
              <div className="item-project-type d">
                <img
                  className="fit-image"
                  src={BUILDINGDATAHOMEPAGE[2].image_url}
                  alt="an-house-labelassociates"
                />
                <div class="banner-content">
                  <h3>JXB Bikehub</h3>
                </div>
              </div>
              <div className="item-project-type c">
                <img
                  className="fit-image"
                  src={BUILDINGDATAHOMEPAGE[3].image_url}
                  alt="td-bakehouse-labelassociates"
                />
                <div class="banner-content">
                  <h3>Sudirman - Shopping Ground</h3>
                </div>
              </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Residential;
