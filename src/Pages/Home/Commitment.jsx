/* eslint-disable no-unused-vars */
import React from "react";
import handshake from "../../assets/handshake.jpg";
import { useOutletContext } from "react-router-dom";

export default function Commitment() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <>
      <section
      id="commitment"
        className={`${
          darkMode ? "bg-[#121212] text-white" : "bg-[#fff]"
        } md:px-10 px-5 lg:py-32 py-20 transition-all duration-300`}
      >
        <section className="grid lg:grid-cols-2 md:grid-cols-17 lg:gap-10 gap-5">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img src={handshake} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold uppercase">
              Expert Support For Startup Growth
            </p>
            <h2 className="lg:text-6xl md:text-3xl text-3xl font-bold my-5">
              Unleashing Startup Potential: Bridging the Resource Gap.
            </h2>
            <p className="md:text-justify">
              We understand that startups can face challenges when it comes to
              building in-house teams for crucial functions like growth
              marketing, sales, business development, and partnerships. That’s
              why we’re here to provide the support and expertise needed to help
              these businesses achieve their goals and reach new levels of
              success. Whether it’s through our personalized consulting services
              or our network of industry experts, Microblack is dedicated to
              helping startups achieve their full potential.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
