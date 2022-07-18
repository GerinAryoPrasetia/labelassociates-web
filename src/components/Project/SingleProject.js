import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BUILDINGDATA, BUILDINGDATAHOMEPAGE } from "../data";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import "../../styles/Project.scss";
import Navbar from "../Navbar/Navbar";
// import styles from "../../styles/SingleProject.module.css";
import { Oval } from "react-loader-spinner";
import SidebarProjects from "../Sidebar/SidebarProjects";
import Loading from "../Loading";
import { useMediaQuery } from "react-responsive";
import Scroll from "../ScrollToTop/Scroll";
const SingleProject = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const { id } = useParams();
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
  }, [id]);

  let images = [];

  const found = BUILDINGDATA.find((obj) => {
    return obj.id == id;
  });
  const pushimages = () => {
    let i = 0;
    for (i = 0; i < found.image_url.length; i++) {
      let img = {
        original: found.image_url[i],
        thumbnail: found.image_url[i],
      };
      images.push(img);
    }
  };
  pushimages();

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="container-single-projects">
        <div class="main-content-projects">
          {found !== undefined ? (
            <SidebarProjects
              name={found.name}
              collab={found.collab_detail}
              type={found.type_detail}
              loc={found.location_detail}
              status={found.status_detail}
              area={found.area_detail}
            />
          ) : (
            <SidebarProjects />
          )}
          <div className={"single-wrapper"}>
            <ImageGallery
              items={images}
              // additionalClass="image-gallery-thumbnails"
              // lazyLoad={true}
              showPlayButton={false}
              slideOnThumbnailOver={true}
              showFullscreenButton={false}
            />
          </div>
        </div>
        <div className="single-project-mobile">
          {found.image_url.map((im) => (
            <div className="image-mobile-wrapper">
              <img src={im} alt={found.name} />
            </div>
          ))}
        </div>
        <Navbar type="main" />
      </div>
      <Scroll />
    </>
  );
};

export default SingleProject;
