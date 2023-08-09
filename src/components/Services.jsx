import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={2000}
      >
        <div>
          <img src={img3} alt="item3" />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Full Time Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
