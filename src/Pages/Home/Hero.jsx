/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../Components/Button";
import img from "../../assets/light.png";
import { RxThickArrowDown } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/Waves.json";
import scrolldown from "../../assets/scrolldown.json";
import rocket from "../../assets/rocket.json";
import Typical from "react-typical";
import Typer from "../../Components/Typer";
import { Link } from "react-scroll";
import logow from "../../assets/logow.png"
import logob from "../../assets/logob.png"

function Hero() {
  const [darkMode, setDarkMode] = useOutletContext();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const defaultOptionsScroll = {
    loop: true,
    autoplay: true,
    animationData: scrolldown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const rocketAnime = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };

  return (
    <>
      <section
        className={`${
          darkMode ? "bg-[#121212] text-white" : "bg-[#ece9e6]"
        } md:px-10 px-5 md:h-[700px] h-[950px] md:pt-[80px] overflow-hidden transition-all duration-400`}
      >
        <section className="grid lg:grid-cols-16 md:grid-cols-16 grid-rows-2">
          <section className="flex flex-col justify-center items-center order-2 md:-order-2">
            <div className="lg:w-[600px]">
              {/* <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold uppercase lg:mb-10 mb-5">
                Microblack
              </h1> */}
              <div className="lg:w-auto md:w-[200px] w-[200px] lg:mb-10 mb-5">
                <img src={darkMode ? logow : logob} alt="" />
              </div>
              <p className="lg:text-xl md:text-lg font-semibold uppercase">
                <Typer
                  dataText={[
                    "The Ad hoc growth marketing, sales, and business development team your startup needs.",
                    "Agile growth catalysts for startups.",
                    "Strategic marketing and sales experts.",
                    "Result-oriented business development specialists.",
                    "Startup acceleration partners.",
                    "Entrepreneurial growth enablers.",
                    "Innovative startup boosters.",
                    "Adaptive marketing and sales force.",
                    "Tailored solutions for startup success.",
                    "Dynamic startup growth consultants.",
                    "Driving revenue for early-stage ventures.",
                  ]}
                />
              </p>
              <p className="lg:my-10 my-5 md:text-justify">
                Are you a tech startup looking to accelerate your growth and
                achieve your revenue goals? At Microblack, we specialize in
                sales, business development, and digital marketing strategies
                tailored specifically for startups like yours. With our ad hoc
                team of experts, we identify and leverage growth opportunities
                to help your business thrive in the competitive market.
              </p>
              <Button to={"contact"} text={"Contact Us"} />
            </div>
          </section>
          <section className="grid place-items-center">
            {/* <div className="lg:w-[400px] md:w-[280px] absolute -top-[89px] lg:right-[50px]">
              <img src={img} className="w-full" alt="" />
            </div> */}
            <div className="lg:w-[400px] md:w-[380px] w-[200px] md:-rotate-90 -rotate-45">
            <Lottie options={rocketAnime} />
            </div>
          </section>
        </section>
        <div className="grid m-auto lg:translate-y-[-630px] md:translate-y-[-580px] translate-y-[120px] md:w-[50px] w-[40px]">
          <Link to="commitment" smooth={true} duration={1000}>
            <Lottie options={defaultOptionsScroll} />
          </Link>
        </div>
      </section>
      <div
        className={`${
          darkMode ? "bg-[#121212] text-white" : "bg-[#ece9e6]"
        } transition-all duration-400`}
      >
        <Lottie className options={defaultOptions} />
      </div>
    </>
  );
}

export default Hero;
