/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import placeholderimg from "../../assets/placeimg.png";
import animationData from "../../assets/Waves.json";
import scrolldown from "../../assets/scrolldown.json";
import { useOutletContext } from "react-router-dom";
import Lottie from "react-lottie";

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
  return (
    <section className={`${
        darkMode ? "bg-[#121212] text-white" : ""
      } overflow-hidden transition-all duration-400`}>
      <section className="grid lg:grid-cols-16 lg:px-[7rem] md:px-10 px-5 lg:py-32 py-20 gap-5">
        <div className="grid place-items-center lg:-order-1 order-1">
          <div>
            <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold">Core Values</h2>
            <p>
              <span className="md:my-10 my-5 block md:text-3xl text-xl font-semibold">
                Excellence: Striving for Exceptional Results
              </span>
              <span>
                We are dedicated to excellence in all aspects of our work. We
                believe in setting high standards and continuously pushing
                boundaries to achieve remarkable results for our clients.
                Whether it's developing innovative strategies, executing
                campaigns, or delivering measurable outcomes, we never settle
                for anything less than excellence.
              </span>
            </p>
            <p>
              <span className="md:my-10 my-5 block md:text-3xl text-xl font-semibold">
                Integrity: Acting with Honesty and Transparency
              </span>
              <span>
                Integrity is at the heart of our business. We uphold the highest
                ethical standards and foster an environment of honesty,
                transparency, and trust. We prioritize open communication,
                honoring commitments, and maintaining confidentiality. Our
                clients can rely on us to act in their best interests, build
                genuine relationships, and deliver services with the utmost
                integrity.
              </span>
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="md:w-[400px] w-[200px]">
            <img src={placeholderimg} alt="" />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-17 lg:px-[7rem] md:px-10 px-5 lg:py-32 py-20">
        <div className="grid place-items-center">
          <div className="md:w-[400px] w-[200px]">
            <img src={placeholderimg} alt="" />
          </div>
        </div>
        <div className="grid place-items-center">
          <div>
            <p>
              <span className="md:my-10 my-5 block md:text-3xl text-xl font-semibold">
                Excellence: Striving for Exceptional Results
              </span>
              <span>
                We are dedicated to excellence in all aspects of our work. We
                believe in setting high standards and continuously pushing
                boundaries to achieve remarkable results for our clients.
                Whether it's developing innovative strategies, executing
                campaigns, or delivering measurable outcomes, we never settle
                for anything less than excellence.
              </span>
            </p>
            <p>
              <span className="md:my-10 my-5 block md:text-3xl text-xl font-semibold">
                Integrity: Acting with Honesty and Transparency
              </span>
              <span>
                Integrity is at the heart of our business. We uphold the highest
                ethical standards and foster an environment of honesty,
                transparency, and trust. We prioritize open communication,
                honoring commitments, and maintaining confidentiality. Our
                clients can rely on us to act in their best interests, build
                genuine relationships, and deliver services with the utmost
                integrity.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div
        className={`${
          darkMode ? "bg-[#121212] text-white" : ""
        } transition-all duration-400`}
      >
        <Lottie className options={defaultOptions} />
      </div>
    </section>
  );
}

export default Hero;
