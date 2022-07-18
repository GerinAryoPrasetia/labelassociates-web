import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SidebarAbout from "../components/Sidebar/SidebarAbout";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Contact.module.css";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";
import { LISTTYPEWORK, LISTWORKFLOW } from "../components/data";
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
  const [overlayShowing, setOverlayShowing] = useState(true);
  const [overlayShowingTwo, setOverlayShowingTwo] = useState(true);

  const slideLengthOne = LISTTYPEWORK.length;
  const slideLengthTwo = LISTWORKFLOW.length;

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

  useEffect(() => {
    setCurrentSlide(0);
    setCurrentSlideTwo(0);
  }, []);

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

  const typeOfWorkClick = () => {
    setTypeWorkClicked(!typeWorkClicked);
  };

  const workflowClick = () => {
    setWorkFlowClicked(!workFlowClicked);
  };

  const sideClickedOne = () => {
    setIsActiveOne(true);
    setIsActiveTwo(false);
    setOverlayShowing(false);
  };

  const sideClickedTwo = () => {
    setIsActiveTwo(true);
    setIsActiveOne(false);
    setOverlayShowingTwo(false);
  };

  const hideOverlay = () => {
    setOverlayShowing(false);
  };

  const hideOverlayTwo = () => {
    setOverlayShowingTwo(false);
  };

  return (
    <>
      <div className={styles.container_work}>
        <Navbar />
        <div className={styles.main_content_about}>
          <div class={styles.side_container}>
            <div class={styles.side_content}>
              {/* <h1>LabelAssociates</h1> */}
              <div
                className={styles.item_container}
                onClick={() => {
                  sideClickedOne();
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
                  overlayShowing ? "overlay-work" : "overlay-work-hidden"
                }
                onClick={() => hideOverlay()}
              >
                <div className="overlay-work-content">
                  <p>Type of Work</p>
                </div>
              </div>
              <div
                className={
                  overlayShowing ? "slider-work work-hidden" : "slider-work "
                }
              >
                <AiOutlineArrowLeft
                  className="arrow_work prev_work"
                  onClick={prevSlide}
                />
                <AiOutlineArrowRight
                  className="arrow_work next_work"
                  onClick={nextSlide}
                />
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
                  overlayShowingTwo ? "overlay-work" : "overlay-work-hidden"
                }
                onClick={() => hideOverlayTwo()}
              >
                <div className="overlay-work-content">
                  <p>Work Flow</p>
                </div>
              </div>
              <div
                className={
                  overlayShowingTwo
                    ? "slider-work  work-hidden "
                    : "slider-work"
                }
              >
                <AiOutlineArrowLeft
                  className="arrow_work prev_work"
                  onClick={prevSlideTwo}
                />
                <AiOutlineArrowRight
                  className="arrow_work next_work"
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
      {/* mobile */}
      <div className={styles.container_work_mobile}>
        <Navbar />
        <div className={styles.main_content_about_mobile}>
          <div class={styles.side_container_mobile}>
            <div class={styles.side_content_mobile}>
              {/* <h1>LabelAssociates</h1> */}
              <div
                className={styles.item_container}
                onClick={() => {
                  sideClickedOne();
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
                  overlayShowing ? "overlay-work" : "overlay-work-hidden"
                }
                onClick={() => hideOverlay()}
              >
                <div className="overlay-work-content">
                  <p>Type of Work</p>
                </div>
              </div>
              <div
                className={
                  overlayShowing ? "slider-work work-hidden" : "slider-work "
                }
              >
                <AiOutlineArrowLeft
                  className="arrow_work prev_work"
                  onClick={prevSlide}
                />
                <AiOutlineArrowRight
                  className="arrow_work next_work"
                  onClick={nextSlide}
                />
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
                  overlayShowingTwo ? "overlay-work" : "overlay-work-hidden"
                }
                onClick={() => hideOverlayTwo()}
              >
                <div className="overlay-work-content">
                  <p>Work Flow</p>
                </div>
              </div>
              <div
                className={
                  overlayShowingTwo
                    ? "slider-work  work-hidden "
                    : "slider-work"
                }
              >
                <AiOutlineArrowLeft
                  className="arrow_work prev_work"
                  onClick={prevSlideTwo}
                />
                <AiOutlineArrowRight
                  className="arrow_work next_work"
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
    </>
  );
};

export default ScopeOfWork;
