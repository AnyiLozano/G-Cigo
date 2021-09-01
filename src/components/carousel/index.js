import React from 'react';
import Slider from "react-slick";

const Carousel = props => {
  const {
    children,
      dots,
    arrows,
    slidesToShow,
    slidesToScroll,
  } = props;

  return (
      <Slider
          dots={dots}
          arrows={arrows}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          speed={500}
          infinite={true}
      >
        {children}
      </Slider>
  )
}
export default Carousel;