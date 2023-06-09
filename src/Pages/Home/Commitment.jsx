/* eslint-disable no-unused-vars */
import React from "react";
import handshake from "../../assets/handshake.jpg";
import { useOutletContext } from "react-router-dom";

export default function Commitment() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <>
      <section
        className={`${
          darkMode ? "bg-[#212121] text-white" : "bg-[#fff]"
        } lg:px-10 py-32`}
      >
        <section className="grid grid-cols-2 gap-10">
          <div>
            <div className="rounded-lg overflow-hidden ">
              <img src={handshake} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold uppercase">
              Expert Support For Startup Growth
            </p>
            <h2 className="text-6xl font-bold my-5">
              Unleashing span Startup Potential: Bridging the Resource Gap.
            </h2>
            <p className="text-justify">
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
      {darkMode && (
        <div className="flex justify-center p-10 bg-[#212121]">
          <div className="bg-[#f6df01] w-3 h-3 rounded-full mx-5"></div>
          <div className="bg-[#f6df01] w-3 h-3 rounded-full mx-5"></div>
          <div className="bg-[#f6df01] w-3 h-3 rounded-full mx-5"></div>
          <div className="bg-[#f6df01] w-3 h-3 rounded-full mx-5"></div>
        </div>
      )}
    </>
  );
}
