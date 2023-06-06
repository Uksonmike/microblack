/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/microblacklogo.png";

export default function Header() {
  return (
    <header className="py-5 px-10 border text-[#414a4d] font-medium">
      <nav className="flex justify-between items-center">
        <section className="flex items-center">
          <div className="items-center flex flex-col">
            <div className="w-[50px]">
              <Link to={"/"}>
                <img src={logo} alt="Microblack logo" />
              </Link>
            </div>
            <p className="font-bold text-xs">microblack</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 text-center ml-8">
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"/"} className="link">
                HOME
              </Link>
            </div>
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"blog"} className="link">
                BLOG
              </Link>
            </div>
            <div className="logo px-1 py-3  rounded" to={"/"}>
              <Link to={"about"} className="link">
                ABOUT
              </Link>
            </div>
          </div>
        </section>
        <section className="">
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
