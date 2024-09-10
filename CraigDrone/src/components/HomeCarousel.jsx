import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarousel.css";

const responsive = {
  desktop: {
    breakpoint: {max: 10024, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min:500 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 1",
    smallText:"words"
      
  },
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 2",
    smallText:"words"
  },
  //Second image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 3",
    smallText:"words"
  },
  //Third image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 4",
    smallText:"words"
  },

  //Fourth image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 5",
    smallText:"words"
  }
];


const HomeCarousel = () => {
  return (
    <div className="parentContainer">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="image" />
              <h1 className="cHText">{imageUrl.bigText}</h1>
              <p className="cPText">{imageUrl.smallText}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;