/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function BlackTextComponent({ children, text, heading }) {
  return (
    <div className="bg-[#000000af] rounded-lg p-5">
      <div className="bg-[#414a4d54] p-5 w-[90px] h-[90px] rounded-full grid place-items-center">
        {children}
      </div>
      <h2 className="text-2xl font-bold my-5">{heading}</h2>
      <p>{text}</p>
    </div>
  );
}

export default BlackTextComponent;
