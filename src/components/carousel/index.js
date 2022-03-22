import React from 'react';
import Slider from "react-slick";

const Carousel = props => {
    const {
        children,
        dots,
        arrows,
        slidesToShow,
        slidesToScroll,
        autoplay,

    } = props;

    return (
        <Slider
            dots={dots}
            arrows={arrows}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            speed={500}
            infinite={true}
            autoplay={autoplay}
        >
            {children}
        </Slider>
    )
}
export default Carousel;