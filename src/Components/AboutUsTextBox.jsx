/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";

function AboutUsTextBox({ children, heading, text }) {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <div
      className={`${
        darkMode ? "bg-[#212121]" : "bg-[#ece9e6]"
      }  hover:shadow-2xl transition-all duration-300 px-7 py-10 rounded`}
    >
      <div className="bg-[#f6df01] w-[70px] h-[70px] grid place-items-center rounded-full">
        <div className={`${darkMode ? "text-[#212121]" : ""} `}>{children}</div>
      </div>
      <h3 className="text-2xl font-medium my-5 uppercase">{heading}</h3>
      <p className="text-justify">{text}</p>
    </div>
  );
}

export default AboutUsTextBox;
