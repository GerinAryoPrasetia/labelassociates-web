import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Home.scss";
import { BUILDINGDATAHOMEPAGE } from "../components/data";
import { MutatingDots } from "react-loader-spinner";

const Home = () => {
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
    <div className="container-home">
      <Navbar />
      <div className="grid-wrapper">
        <div className="item a">
          <img
            className="fit-image"
            src={BUILDINGDATAHOMEPAGE[0].image_url[0]}
            alt="an-house-labelassociates"
          />
          <div class="banner-content">
            <h3>{BUILDINGDATAHOMEPAGE[0].name}</h3>
            <p>{BUILDINGDATAHOMEPAGE[0].type}</p>
          </div>
        </div>
        <div className="item b">
          <img
            className="fit-image"
            src={BUILDINGDATAHOMEPAGE[1].image_url}
            alt="ba-house-labelassociates"
          />
          <div class="banner-content">
            <h3>{BUILDINGDATAHOMEPAGE[1].name}</h3>
            <p>{BUILDINGDATAHOMEPAGE[1].type}</p>
          </div>
        </div>
        <div className="item d">
          <img
            className="fit-image"
            src={BUILDINGDATAHOMEPAGE[2].image_url}
            alt="an-house-labelassociates"
          />
          <div class="banner-content">
            <h3>{BUILDINGDATAHOMEPAGE[2].name}</h3>
            <p>{BUILDINGDATAHOMEPAGE[2].type}</p>
          </div>
        </div>
        <div className="item c">
          <img
            className="fit-image"
            src={BUILDINGDATAHOMEPAGE[3].image_url}
            alt="td-bakehouse-labelassociates"
          />
          <div class="banner-content">
            <h3>{BUILDINGDATAHOMEPAGE[3].name}</h3>
            <p>{BUILDINGDATAHOMEPAGE[3].type}</p>
          </div>
        </div>
        <div className="item e">
          <img
            className="fit-image"
            src={BUILDINGDATAHOMEPAGE[4].image_url}
            alt="kj-clinic-labelassociates"
          />
          <div class="banner-content">
            <h3>{BUILDINGDATAHOMEPAGE[4].name}</h3>
            <p>{BUILDINGDATAHOMEPAGE[4].type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
