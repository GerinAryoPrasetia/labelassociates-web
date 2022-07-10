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
} from "../components/data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../styles/SliderCommercial.scss";

const Team = () => {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  const [currentSlideThree, setCurrentSlideThree] = useState(0);
  const slideLengthOne = LISTIMGTEAMLUDO.length;
  const slideLengthTwo = LISTIMGTEAMISAN.length;
  const slideLengthThree = LISTIMGTEAMIZA.length;

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

  const nextSlideThree = () => {
    setCurrentSlideThree(
      currentSlideThree === slideLengthThree - 1 ? 0 : currentSlideThree + 1
    );
    console.log("next");
  };

  const prevSlideThree = () => {
    setCurrentSlideThree(
      currentSlideThree === 0 ? slideLengthThree - 1 : currentSlideThree - 1
    );
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
    setCurrentSlideTwo(0);
    setCurrentSlideThree(0);
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
    <div className={styles.container_about}>
      <Navbar />
      <div className={styles.main_content_about}>
        <div class={styles.side_container}>
          <div class={styles.side_content}>
            {/* <h1>LabelAssociates</h1> */}
            <Link to={"/about"}>
              <div
                className={styles.item_container}
                onClick={() => sideClickedOne()}
              >
                <p
                  className={
                    isActiveOne ? styles.side_item_active : styles.side_item
                  }
                >
                  Philosophy
                </p>
              </div>
            </Link>
            <Link to={"/about"}>
              <div
                className={styles.item_container}
                onClick={() => sideClickedTwo()}
              >
                <p
                  className={
                    isActiveTwo ? styles.side_item_active : styles.side_item
                  }
                >
                  About Label
                </p>
              </div>
            </Link>
            <div
              className={styles.item_container}
              onClick={() => sideClickedThree()}
            >
              <p
                className={
                  isActiveThree ? styles.side_item_active : styles.side_item
                }
              >
                Meet The Team
              </p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className={styles.container_content_team}>
          <div className="container-team">
            <div className="slider-team">
              <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
              <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
              {LISTIMGTEAMLUDO.map((container, index) => (
                <div
                  className={
                    index === currentSlide
                      ? "slide-team current-team"
                      : "slide-team"
                  }
                  key={index}
                  style={{
                    backgroundImage: `url(${container})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img src={container} alt="" /> */}
                </div>
              ))}
            </div>
            <ul>
              <li>Head Architect - Ludowikus Panduhadi Pangestu S.Ars.</li>
              <li>Lulusan Arsitek UNPAR</li>
              <li>Focus on Design Architecture</li>
              <li>Interest : Exploring Architecture Building</li>
            </ul>
          </div>
          <div className="container-team">
            <div className="slider-team">
              <AiOutlineArrowLeft
                className="arrow prev"
                onClick={prevSlideTwo}
              />
              <AiOutlineArrowRight
                className="arrow next"
                onClick={nextSlideTwo}
              />
              {LISTIMGTEAMISAN.map((container, index) => (
                <div
                  className={
                    index === currentSlideTwo
                      ? "slide-team current-team"
                      : "slide-team"
                  }
                  key={index}
                  style={{
                    backgroundImage: `url(${container})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}
            </div>
            <ul>
              <li>
                General Manager | Architect - Fariz Ikhsansyah S.Ars, IAI.
              </li>
              <li>Lulusan Arsitek UNPAR</li>
              <li>Focus on Architectural Technical and details</li>
              <li>Interest : Technology</li>
            </ul>
          </div>
          <div className="container-team">
            <div className="slider-team">
              <AiOutlineArrowLeft
                className="arrow prev"
                onClick={prevSlideThree}
              />
              <AiOutlineArrowRight
                className="arrow next"
                onClick={nextSlideThree}
              />
              {LISTIMGTEAMIZA.map((container, index) => (
                <div
                  className={
                    index === currentSlideThree
                      ? "slide-team current-team"
                      : "slide-team"
                  }
                  key={index}
                  style={{
                    backgroundImage: `url(${container})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}
            </div>
            <ul>
              <li>Head Operation | Architect - M Iza Wildan S.Ars</li>
              <li>Lulusan Arsitek UNPAR</li>
              <li>Focus on business development</li>
              <li>Interest : Tennis & Bonsai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
