import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Home.scss";
import { BUILDINGDATAHOMEPAGE } from "../components/data";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  const navigateHome = (id) => {
    navigate(`/project/${id}`);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container-home">
      <Navbar />

      <div className="grid-wrapper">
        <div
          className="item a"
          onClick={() => navigateHome(BUILDINGDATAHOMEPAGE[1].id)}
        >
          <div className="banner-content-home">
            <h3>
              {BUILDINGDATAHOMEPAGE[1].name} - {BUILDINGDATAHOMEPAGE[1].type}
            </h3>
            <p></p>
          </div>
        </div>
        <div
          className="item b"
          onClick={() => navigateHome(BUILDINGDATAHOMEPAGE[0].id)}
        >
          <div className="banner-content-home">
            <h3>
              {BUILDINGDATAHOMEPAGE[0].name} - {BUILDINGDATAHOMEPAGE[0].type}
            </h3>
            <p></p>
          </div>
        </div>
        <div
          className="item d"
          onClick={() => navigateHome(BUILDINGDATAHOMEPAGE[2].id)}
        >
          <div className="banner-content-home">
            <h3>
              {BUILDINGDATAHOMEPAGE[2].name} - {BUILDINGDATAHOMEPAGE[2].type}
            </h3>
            <p></p>
          </div>
        </div>
        <div
          className="item c"
          onClick={() => navigateHome(BUILDINGDATAHOMEPAGE[3].id)}
        >
          <div className="banner-content-home">
            <h3>
              {BUILDINGDATAHOMEPAGE[3].name} - {BUILDINGDATAHOMEPAGE[3].type}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
