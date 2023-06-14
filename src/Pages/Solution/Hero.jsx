/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/Waves.json";
import scrolldown from "../../assets/scrolldown.json";
import rocket from "../../assets/rocket.json";
import Typer from "../../Components/Typer";
import { Link } from "react-scroll";
import { useOutletContext } from "react-router-dom";
import solution from "../../assets/solutions.json";
import img from "../../assets/light.png";

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
  const solutionAnime = {
    loop: true,
    autoplay: true,
    animationData: solution,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  return (
    <>
      <section
        className={`${
          darkMode ? "bg-[#121212] text-white" : ""
        } md:px-10 px-5 md:h-[550px] h-[650px] md:pt-[230px] overflow-hidden transition-all duration-400`}
      >
        <section className="grid lg:grid-cols-16 md:grid-cols-16 grid-rows-2">
          <section className="flex flex-col justify-center lg:items-center order-2 md:-order-2">
            <div className="lg:w-[600px]">
              <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold uppercase lg:mb-10 mb-5">
                Our Solutions
              </h1>
              <p className="lg:text-xl md:text-lg font-semibold uppercase">
                <Typer
                  dataText={[
                    "Unlocking Success through Tailored Solutions: Empowering Startups with Strategic Sales, Business Development, and Growth Marketing Strategies.",
                    "Navigating the Startup Landscape: Elevate Your Growth Trajectory with Expertly Designed Solutions",
                    "Driving Startup Excellence: Amplify Your Business Potential.",
                  ]}
                />
              </p>
            </div>
          </section>
          <section className="grid place-items-center">
            <div className="lg:w-[400px] md:w-[380px] w-[200px] relative">
              <div className="lg:w-[400px] md:w-[280px] md:absolute -top-[290px] lg:right-[50px]">
                <img src={img} className="w-full" alt="" />
              </div>
            </div>
          </section>
        </section>
        <div className="grid m-auto -translate-y-3 md:w-[50px] w-[40px]">
          <Link to="solutions" smooth={true} duration={1000}>
            <Lottie options={defaultOptionsScroll} />
          </Link>
        </div>
      </section>
      <div
        className={`${
          darkMode ? "bg-[#121212] text-white" : ""
        } transition-all duration-400`}
      >
        <Lottie className options={defaultOptions} />
      </div>
    </>
  );
}

export default Hero;
