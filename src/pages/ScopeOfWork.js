import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SidebarAbout from "../components/Sidebar/SidebarAbout";
import styles from "../styles/About.module.css";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";
import {
  LISTDATACOMMERCIAL,
  LISTIMGTEAMISAN,
  LISTIMGTEAMIZA,
  LISTIMGTEAMLUDO,
  LISTTYPEWORK,
  LISTWORKFLOW,
} from "../components/data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../styles/SliderCommercial.scss";

const ScopeOfWork = () => {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  const [typeWorkClicked, setTypeWorkClicked] = useState(false);
  const [workFlowClicked, setWorkFlowClicked] = useState(false);

  const slideLengthOne = LISTTYPEWORK.length;
  const slideLengthTwo = LISTWORKFLOW.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLengthOne - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLengthOne - 1 : currentSlide - 1);
    console.log("prev");
  };

  const nextSlideTwo = () => {
    setCurrentSlideTwo(
      currentSlideTwo === slideLengthTwo - 1 ? 0 : currentSlideTwo + 1
    );
    console.log("next");
  };

  const prevSlideTwo = () => {
    setCurrentSlideTwo(
      currentSlideTwo === 0 ? slideLengthTwo - 1 : currentSlideTwo - 1
    );
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
    setCurrentSlideTwo(0);
  }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide]);
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
  };

  const sideClickedTwo = () => {
    setIsActiveTwo(!isActiveTwo);
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
              onClick={() => {
                sideClickedOne();
                setTypeWorkClicked(!typeWorkClicked);
              }}
            >
              <p
                className={
                  isActiveOne ? styles.side_item_active : styles.side_item
                }
              >
                Type of Work
              </p>
            </div>
            <div
              className={styles.item_container}
              onClick={() => {
                sideClickedTwo();
                setWorkFlowClicked(!workFlowClicked);
              }}
            >
              <p
                className={
                  isActiveTwo ? styles.side_item_active : styles.side_item
                }
              >
                Work Flow
              </p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className={styles.container_content_work}>
          <div className="container-work">
            <div
              className={
                workFlowClicked ? "slider-work work-hidden" : "slider-work"
              }
            >
              <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
              <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
              {LISTTYPEWORK.map((container, index) => (
                <div
                  className={
                    index === currentSlide
                      ? "slide-work current-work"
                      : "slide-work"
                  }
                  key={index}
                >
                  <div
                    className="img-work"
                    style={{
                      backgroundImage: `url(${container.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    1
                  </div>
                  <div className="content-work">
                    <h3>{container.name}</h3>
                    <ul>
                      {container.data.map((c, idx) => (
                        <ul>{c}</ul>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container-work">
            <div
              className={
                typeWorkClicked ? "slider-work work-hidden" : "slider-work"
              }
            >
              <AiOutlineArrowLeft
                className="arrow prev"
                onClick={prevSlideTwo}
              />
              <AiOutlineArrowRight
                className="arrow next"
                onClick={nextSlideTwo}
              />
              {LISTWORKFLOW.map((container, index) => (
                <div
                  className={
                    index === currentSlideTwo
                      ? "slide-work current-work"
                      : "slide-work"
                  }
                  key={index}
                >
                  <div
                    className="img-work"
                    style={{
                      backgroundImage: `url(${container.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="content-work">
                    <h3>
                      {index + 1}.{container.name}
                    </h3>
                    <ul>
                      {container.data.map((c, idx) => (
                        <ul>{c}</ul>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeOfWork;
