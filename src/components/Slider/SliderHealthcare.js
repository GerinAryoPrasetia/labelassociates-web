import React, { useEffect, useState } from "react";
import "../../styles/SliderCommercial.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BUILDINGDATA, LISTDATACOMMERCIAL, LISTDATAHEALTH } from "../data";
import { Link } from "react-router-dom";

const SliderHealthCare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = LISTDATACOMMERCIAL.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

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
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {LISTDATAHEALTH.map((container, index) => (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          <div className="list-grid-wrapper-slider">
            {container.map((data, idx) => (
              //   <p>{data.name}</p>
              <Link to={`/project/${data.id}`}>
                {/* <p>{data.name}</p> */}
                <div className={`item-project-type-slider item-${idx + 1}`}>
                  {console.log("cliked")}
                  {/* <p>{data.name}</p>
                  <p>{idx + 1}</p> */}
                  <img
                    className="fit-image"
                    src={data.image_url[0]}
                    alt={`${data.name}`}
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

export default SliderHealthCare;
