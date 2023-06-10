/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import partnership from "../assets/partnership.png";
import blackops from "../assets/blackops.png";
import wblackops from "../assets/wblackops.png";
import fixit from "../assets/fixit.png";
import wfixit from "../assets/wfixit.png";
import iqubelogo from "../assets/iqubelogo.png";
import labr from "../assets/labr.png";
import parkit from "../assets/parkit.png";
import sparklogo from "../assets/sparklogo.png";
import wsparklogo from "../assets/wsparklogo.png";
import yeboxlogo from "../assets/yeboxlogo.png";
import { useOutletContext } from "react-router-dom";

const AutoPlay = () => {
  const [darkMode, setDarkMode] = useOutletContext();
  const element = [
    {
      id: 1,
      image: darkMode ? wblackops : blackops,
    },
    {
      id: 2,
      image: darkMode ? wfixit : fixit,
    },
    {
      id: 3,
      image: iqubelogo,
    },
    {
      id: 4,
      image: labr,
    },
    {
      id: 5,
      image: parkit,
    },
    {
      id: 6,
      image: darkMode ? wsparklogo : sparklogo,
    },
    {
      id: 7,
      image: yeboxlogo,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={`${darkMode ? "text-white":""} text-center mb-20 transition-all duration-400`}>
        <h2 className="lg:text-5xl font-semibold">Featured Partner</h2>
        <p className="font-medium">Forging Connections: Presenting Our Exceptional Partner Ecosystem</p>
      </div>
      <Slider {...settings}>
        {element.map((item) => {
          return (
            <div className="">
              <div
                key={item.id}
                className="w-[200px] h-[80px] flex justify-center items-center m-auto"
              >
                <img className="" src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AutoPlay;
