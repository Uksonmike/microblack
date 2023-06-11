/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


function Card({ children, heading, text, darkMode }) {
  return (
    <div className={`${darkMode ? "bg-[#121212] text-white" : "bg-white"} drop-shadow-2xl  p-5 flex flex-col items-center rounded-lg  transition-all duration-100`}>
      <div className="w-[200px] h-[150px] mb-5">{children}</div>
      <div className="">
        <div>
          <h3 className="text-2xl font-semibold mb-5">{heading}</h3>
          <p className="text-justify">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
