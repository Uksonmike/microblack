/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import partnership from "../assets/partnership.png";


const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Slider {...settings}>
        {element.map((item) => {
          return (
            <div className="">
              <div
                key={item}
                className="w-[150px] flex justify-center items-center m-auto"
              >
                <img src={partnership} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AutoPlay;
