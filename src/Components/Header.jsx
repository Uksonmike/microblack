/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import blogo from "../assets/microblacklogo.png";
import wlogo from "../assets/microwhitelogo.png";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Header({ state, setState }) {
  const [nav, setNav] = React.useState(false);

  const style = {
    backgroundColor: state ? "#121212" : "#fff",
    color: state ? "white" : "black",
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className={`${
        state ? "bg-[#121212]" : "bg-white"
      } transition-all duration-400 py-5 md:px-10 px-5 text-[#414a4d] font-medium fixed w-full z-50 shadow-lg`}
    >
      <nav className="flex justify-between items-center">
        <section className="flex items-center">
          <div className="flex items-center md z-[999]">
            <div className="w-[50px] md:hidden">
              <button onClick={handleNav}>
                {nav ? (
                  <AiOutlineClose size={24} color={state ? "white" : "black"} />
                ) : (
                  <AiOutlineMenu size={24} color={state ? "white" : "black"} />
                )}
              </button>
            </div>
            <div className="hidden items-center md:flex flex-col">
              <div className="lg:w-[50px] w-[30px]">
                <Link to={"/"}>
                  {state ? (
                    <img src={wlogo} alt="Microblack logo" />
                  ) : (
                    <img src={blogo} alt="Microblack logo" />
                  )}
                </Link>
              </div>
              <p className={`${state ? "text-white" : ""} font-bold text-xs`}>
                microblack
              </p>
            </div>
          </div>
          <div
            className={`md:grid grid-cols-3 gap-x-8 text-center ml-8 hidden`}
          >
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"/"} className={`${state ? "text-white" : ""} link`}>
                HOME
              </Link>
            </div>
            {/* <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"blog"} className={`${state ? "text-white" : ""} link`}>
                BLOG
              </Link>
            </div> */}
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
          <button
            className={`${state ? "text-white" : ""} flex gap-2 items-center`}
            onClick={() => setState(!state)}
          >
            {state ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
          <Link
            className="px-6 py-2 rounded-3xl bg-[#f6df01] hover:bg-[#f6c501] md:grid place-items-center text-[#333] hidden"
            to={"contact"}
          >
            CONTACT
          </Link>
        </section>
        <div
          style={style}
          className={
            nav
              ? "z-[1] translate-y-[-90px] h-[100vh] w-full text-white absolute top-[90px] left-0 flex transition-all duration-500 items-center justify-center text-center"
              : "absolute translate-y-[-90px] h-[100vh] w-full bg-opacity-20 text-white top-[90px] left-[-100%] transition-all duration-[500ms] flex items-center justify-center text-center overflow-hidden"
          }
        >
          <ul className="md:text-[20px]">
            <Link to="" className="links" onClick={handleNav}>
              <li className="my-[10px] mb-[30px] hover:cursor-pointer">
                HOME
              </li>
            </Link>
            {/* <Link to="" className="links" onClick={handleNav}>
              <li className="mb-[30px] hover:cursor-pointer">BLOG</li>
            </Link> */}
            <Link to="" className="links" onClick={handleNav}>
              <li className="mb-[30px] hover:cursor-pointer">ABOUT</li>
            </Link>
            <Link
              onClick={handleNav}
              className="px-6 py-2 rounded-3xl bg-[#f6df01] hover:bg-[#f6c501] md:grid place-items-center text-[#333]"
              to={"contact"}
            >
              CONTACT
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
