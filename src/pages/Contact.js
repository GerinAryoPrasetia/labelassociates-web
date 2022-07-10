import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Contact.module.css";
import mapboxgl from "mapbox-gl";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2VyaW5hcnlvIiwiYSI6ImNsNTlzeHV1MDAyb2EzZW8xMmVzbHVuem4ifQ.Uz7f43R-FFlsXt_vxgdGwg";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [displayOne, setDisplayOne] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
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
    <div className={styles.container_about}>
      <Navbar />
      <div className={styles.main_content_about}>
        <div class={styles.side_container}>
          <div class={styles.side_content}>
            {/* <h1>LabelAssociates</h1> */}
            <NavLink to="/contact-form" style={{ textDecoration: "none" }}>
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
                    Contact Form
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
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
                    Location
                  </p>
                </div>
              )}
            </NavLink>
          </div>
        </div>
        {/* Content */}
        {/* <div className={styles.container_content_about}> */}
        <Map
          mapboxAccessToken="pk.eyJ1IjoiZ2VyaW5hcnlvIiwiYSI6ImNsNTlzeHV1MDAyb2EzZW8xMmVzbHVuem4ifQ.Uz7f43R-FFlsXt_vxgdGwg"
          initialViewState={{
            longitude: 107.66181141924545,
            latitude: -6.916480182803706,
            zoom: 14.5,
          }}
          style={{
            width: "100%",
            height: "100%",
            marginLeft: "270px",
            marginBottom: "70px",
            overflow: "hidden",
          }}
          mapStyle="mapbox://styles/mapbox/dark-v10"
        >
          {showPopup && (
            <Popup
              longitude={107.66181141924545}
              latitude={-6.916480182803706}
              anchor="bottom"
              onClose={() => setShowPopup(false)}
            >
              Jl. Kuningan Raya No. 53
            </Popup>
          )}
          <Marker
            longitude={107.66181141924545}
            latitude={-6.916480182803706}
            anchor="center"
          >
            <div>
              <img
                src="https://iili.io/jlXAXI.png"
                alt=""
                style={{ width: "20px" }}
              />
            </div>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Contact;
