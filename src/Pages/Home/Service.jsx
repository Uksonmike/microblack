/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../assets/servicebg.jpg";
import {
  MdSportsKabaddi,
  MdVerified,
  MdOutlineLeaderboard,
  MdEngineering,
  MdOutlineAssignment,
} from "react-icons/md";
import Button from "../../Components/Button";
import BlackTextComponent from "../../Components/blackTextComponent";
import Lottie from "react-lottie";
import networking from "../../assets/networking.json";
import generating from "../../assets/generating.json";
import twopeople from "../../assets/twopeople.json";
import people from "../../assets/people.json";

function Service() {
  const network = {
    loop: true,
    autoplay: true,
    animationData: networking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const generate = {
    loop: true,
    autoplay: true,
    animationData: generating,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const twoPeople = {
    loop: true,
    autoplay: true,
    animationData: twopeople,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };
  const peoplee = {
    loop: true,
    autoplay: true,
    animationData: people,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      transparent: true,
    },
  };

  return (
    <section className="relative bg-service bg-fixed lg:h-[850px] md:h-[1450px] h-[2190px] bg-cover bg-center">
      <div className="absolute bg-[#000000c7] h-full w-full"></div>
      <section className="text-white grid lg:grid-cols-2 md:grid-rows-2 gap-7 absolute lg:px-10 md:px-10 px-5 py-5">
        <section className="grid place-items-center">
          <div className="">
            {/* <p className="font-bold lg:text-2xl text-xl uppercase">
              What we do
            </p> */}
            <h2 className="lg:text-6xl md:text-4xl font-bold lg:my-10 my-5 text-[#f6df01]">
              Value Proposition.
            </h2>
            <p className="mb-5 text-2xl text-justify">
              Microblack provides you with the flexibility, cost-effectiveness,
              and a diverse range of expertise to execute growth marketing,
              sales and business development goals. This can be especially
              important for companies that are just starting out.
            </p>
            {/* <ul className="">
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex justify-items-center mb-10">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
            </ul> */}
            <Button text={"More Info"} to={"about"} />
          </div>
        </section>
        <section className="">
          <div className="grid md:grid-cols-2 gap-5 translate-y-6">
            <BlackTextComponent
              text="At Microblack, we help increase your
              company's visibility online and build its
              reputation through tactics such as content
              marketing, social media marketing, and
              influencer marketing."
              heading="Improving Brand Awareness"
            >
              <Lottie className options={twoPeople} />
              {/* <MdSportsKabaddi color="#f6df01" size={24} /> */}
            </BlackTextComponent>
            <BlackTextComponent
              heading="Generating leads and Conversion"
              text="By creating targeted campaigns and
              landing pages, Microblack helps startups
              generate leads and convert them into
              customers."
            >
              <Lottie className options={network} />
              {/* <MdEngineering color="#f6df01" size={24} /> */}
            </BlackTextComponent>

            <BlackTextComponent
              text="Using tactics such as email marketing and social media marketing, we improve customer engagement and build longlasting relationships with customers."
              heading="Enhancing Customer Engagement"
            >
              <Lottie className options={generate} />
              {/* <MdOutlineLeaderboard color="#f6df01" size={24} /> */}
            </BlackTextComponent>
            <BlackTextComponent
              text="By creating targeted campaigns and landing pages, Microblack
              helps startups generate leads and convert them into customers."
              heading="Measuring And Analyzing Performance"
            >
              <Lottie className options={peoplee} />
              {/* <MdOutlineAssignment color="#f6df01" size={24} /> */}
            </BlackTextComponent>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Service;
