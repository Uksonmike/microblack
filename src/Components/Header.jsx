/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import blogo from "../assets/microblacklogo.png";
import wlogo from "../assets/microwhitelogo.png";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function Header({ state, setState }) {
  return (
    <header
      className={`${
        state ? "bg-[#121212]" : ""
      } transition-all duration-400 py-5 px-10 text-[#414a4d] font-medium`}
    >
      <nav className="flex justify-between items-center">
        <section className="flex items-center">
          <div className="items-center flex flex-col">
            <div className="w-[50px]">
              <Link to={"/"}>
                {state ? (
                  <img src={wlogo} alt="Microblack logo" />
                ) : (
                  <img src={blogo} alt="Microblack logo" />
                )}
              </Link>
            </div>
            <p className={`${state ? "text-white" : ""} font-bold text-xs`}>microblack</p>
          </div>
          <div className={`grid grid-cols-3 gap-x-8 text-center ml-8`}>
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"/"} className={`${state ? "text-white" : ""} link`}>
                HOME
              </Link>
            </div>
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"blog"} className={`${state ? "text-white" : ""} link`}>
                BLOG
              </Link>
            </div>
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link
                to={"about"}
                className={`${state ? "text-white" : ""} link`}
              >
                ABOUT
              </Link>
            </div>
          </div>
        </section>
        <section className="flex gap-5 items-center">
          <button className={`${state ? "text-white" : ""} flex gap-2 items-center`} onClick={() => setState(!state)}>
            Dark Mode
            {state ? (
              <BsToggleOn size={24} />
            ) : (
              <BsToggleOff size={24} />
            )}
          </button>
          <Link
            className="px-6 py-2 rounded-3xl bg-[#f6df01] hover:bg-[#f6c501] grid place-items-center text-[#333]"
            to={"contact"}
          >
            CONTACT
          </Link>
        </section>
      </nav>
    </header>
  );
}
