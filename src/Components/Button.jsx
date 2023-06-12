/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Button({to, text, handleClick}) {
  return (
    <Link to={to}>
      <button onClick={handleClick} className="px-6 py-2 rounded-3xl bg-[#f6df01] hover:bg-[#f6c501] grid place-items-center text-[#333] font-medium">{text}</button>
    </Link>
  );
}
