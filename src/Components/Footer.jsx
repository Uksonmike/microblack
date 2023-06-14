/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/microblackwhite.png";
import {
  MdOutlineMarkEmailRead,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="">
      <section className="bg-[#212121] py-16 lg:px-10 px-5 grid lg:grid-cols-4 md:grid-cols-2 lg:gap-y-0 md:gap-y-5 text-white">
        <section className="">
          <div className="w-[200px]">
            <img src={logo} className="w-full" alt="Microblack" />
          </div>
          <p className="lg:mt-10 mt-5 w-[320px]">
            The Ad hoc growth marketing, sales and business development team
            your startup needs.
          </p>
          <div>
            <div className="flex items-center my-5">
              {/* <a href="#" className="mr-5">
                <GrFacebook color="#3b5998" size={20} />
              </a> */}
              <a target="__blank" href="https://www.instagram.com/_microblack/" className="mr-5">
                <GrInstagram color="E4405F" size={20} />
              </a>
              <a target="__blank" href="https://www.linkedin.com/company/microblack/" className="mr-5">
                <GrLinkedin color="#0072b1" size={20} />
              </a>
              {/* <a href="#" className="mr-5">
                <GrYoutube color="#c4302b" size={20} />
              </a> */}
              <a target="__blank" href="https://twitter.com/_Microblack" className="mr-5">
                <GrTwitter color="#00acee" size={20} />
              </a>
            </div>
          </div>
        </section>
        <section className="">
          <h2 className="lg:mb-[40px] mb-[20px] font-bold text-xl">Company</h2>
          <div className="flex flex-col gap-1 font-medium">
            <div className="footer py-2  rounded w-[60px]">
              <Link className="link" to={"/"}>
                Home
              </Link>
            </div>
            <div className="footer py-2  rounded w-[60px]">
              <Link className="link" to={"blog"}>
                Blog
              </Link>
            </div>
            <div className="footer py-2  rounded w-[60px]">
              <Link className="link" to={"about"}>
                About
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h2 className="lg:mb-[52px] mb-[26px] font-bold text-xl">Office</h2>
          <div className="flex flex-col gap-5">
            <div className="font-medium">
              <a href="https://goo.gl/maps/w89Se85UG1PqDVTU8" target="__blank">
                <p className="">
                  <span>
                    <span className="block mb-5">1625B, Saka Jojo</span>
                    <span className="block mb-5">Victoria Island 101241</span>
                    <span className="block mb-5">Lagos, Nigeria</span>
                  </span>
                </p>
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 className="lg:mb-[52px] mb-[26px]  font-bold text-xl">Contact</h2>
          <div className="flex flex-col gap-5">
            <div className="font-medium">
              <a
                className="flex items-center mb-5 hover:text-[#bbb]"
                href="mailto:microblack@geraldblack.co"
              >
                <span className="mr-2">
                  <MdOutlineMarkEmailRead size={24} />
                </span>
                <span className="hover:translate-x-1 transition-transform duration-200">
                  microblack@geraldblack.co
                </span>
              </a>
              <a
                className="flex items-center hover:text-[#bbb] "
                href="tel:+2349166431118"
              >
                <span className="mr-2">
                  <MdOutlinePhone size={24} />
                </span>
                <span className="hover:translate-x-1 transition-transform duration-200">
                  09166431118
                </span>
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="text-center bg-[#121212] text-white py-10">
        <p className="font-medium">&copy; {`${year} - Microblack`}</p>
      </section>
    </footer>
  );
}

export default Footer;
