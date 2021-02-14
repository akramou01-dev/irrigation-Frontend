import React from "react";
import ReactCardCarousel from "react-card-carousel";
import classes from "./Carousel.module.css";

const Carousel = (props) => {
  const images = props.images.map((image) => {
    return (
      <div key= {image.id} className={classes.Carousel}>
        <img src={image.image} alt="carousel_image " />
      </div>
    );
  });
  return (
    <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
      {images}
    </ReactCardCarousel>
  );
};

export default Carousel;
