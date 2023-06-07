/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../Components/Button";
import img from "../../assets/light.png";
import { useOutletContext } from "react-router-dom"; 

function Hero() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section className={`${darkMode ? "bg-[#212121] text-white" : "bg-[#ece9e6]"} lg:px-10 lg:py-16 grid grid-cols-16 h-[600px] overflow-hidden transition-all duration-400`}>
      <section className="flex flex-col justify-center items-center">
        <div className="w-[600px]">
          <h1 className="text-6xl font-bold uppercase mb-10">Microblack</h1>
          <p className="text-xl font-semibold uppercase">
            The Ad hoc growth marketing, sales, and business development team
            your startup needs
          </p>
          <p className="my-10 text-justify">
            Are you a tech startup looking to accelerate your growth and achieve
            your revenue goals? At Microblack, we specialize in sales, business
            development, and digital marketing strategies tailored specifically
            for startups like yours. With our ad hoc team of experts, we
            identify and leverage growth opportunities to help your business
            thrive in the competitive market.
          </p>
          <Button to={"about"} text={"Build Now"} />
        </div>
      </section>
      <section className="grid place-items-center relative">
        <div className="w-[400px] absolute -top-36 right-[50px]">
          <img src={img} className="w-full" alt="" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
