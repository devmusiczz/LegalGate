import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";

const Slide = ({ children, slidesToShow = 3, arrowsScroll = 1 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: arrowsScroll,
    arrows: true,
  };

  return (
    <div className="slide">
      <div className="container">
        <h1>Consult with Top Advocates</h1>
        <br />
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Slide;
