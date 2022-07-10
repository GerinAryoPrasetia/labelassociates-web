import React, { useEffect, useState } from "react";
import "../../styles/SliderCommercial.scss";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { BUILDINGDATA, LISTDATACOMMERCIAL, LISTDATARESIDENTIAL } from "../data";
import { Link } from "react-router-dom";

const SliderResidential = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = LISTDATACOMMERCIAL.length;
  const [hideArrow, setHideArrow] = useState(true);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  const showArrow = (e) => {
    e.preventDefault();
    setHideArrow(false);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <FaAngleLeft className={"arrow prev"} onClick={prevSlide} />
      <FaAngleRight className={"arrow next"} onClick={nextSlide} />
      {LISTDATARESIDENTIAL.map((container, index) => (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          <div className="list-grid-wrapper-slider">
            {container.map((data, idx) => (
              <Link to={`/project/${data.id}`}>
                <div className={`item-project-type-slider item-${idx + 1}`}>
                  <img
                    className="fit-image"
                    src={data.image_url[0]}
                    alt={`${data.name}-labelassociates`}
                  />
                  <div class="banner-content-slider">
                    <h3>{data.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderResidential;
