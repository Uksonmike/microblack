/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function TeamCardComponents({ name, linkedin, description, img, id, mode }) {
  return (
    <div
      key={id}
      className={`${
        mode ? "text-white" : ""
      } card shadow-2xl rounded drop-shadow-2xl align-middle text-center px-5 py-20 relative`}
    >
      <div className="grid place-items-center">
        <div className="card-image rounded-full w-[100px] overflow-hidden place-items-center">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-5 mb-1">{name}</h2>
        <p className={`${mode ? "text-[#c3c3c3]" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
      <div className="mt-5 flex justify-center gap-3 absolute bottom-5 left-[46%]">
        <a target="__blank" href={linkedin}>
          <BsLinkedin color="#0072b1" size={20} />
        </a>
      </div>
    </div>
  );
}

export default TeamCardComponents;
