import React from "react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Style";
import { useMediaQuery } from "react-responsive";

const Scroll = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300 && isMobile) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    // console.log("scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        // style={{ display: "inline" }}
      />
    </Button>
  );
};

export default Scroll;
