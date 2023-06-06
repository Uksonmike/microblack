/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../assets/servicebg.jpg";
import {
  MdSportsKabaddi,
  MdVerified,
  MdOutlineLeaderboard,
  MdEngineering,
  MdOutlineAssignment,
} from "react-icons/md";
import Button from "../../Components/Button";

function Service() {
  return (
    <section className="relative bg-service bg-fixed h-[750px] bg-cover bg-center">
      <div className="absolute bg-[#000000c7] h-full w-full"></div>
      <section className="text-white grid grid-cols-2 gap-7 absolute lg:px-10 py-5">
        <section className="grid place-items-center">
          <div>
            <p>What we do</p>
            <h2 className="text-6xl font-bold my-5 text-[#f6df01]">
              Improving Brand Awareness
              <span className="text-white">.</span>
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum est
              voluptates sint inventore velit accusantium reprehenderit quisquam
              rerum quibusdam, deserunt eos harum? Facere a velit fugiat maiores
              optio sequi aliquam aut, cupiditate consequuntur nam error.
              Architecto commodi maxime eum doloribus sit reiciendis? Quas
              corporis minus, placeat ex maiores modi eius.
            </p>
            <ul className="">
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex items-center my-5">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
              <li className="flex justify-items-center mb-10">
                <span className="mr-2">
                  <MdVerified color="#f6df01" />
                </span>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, quae?
                </span>
              </li>
            </ul>
            <Button text={"More Info"} to={"about"} />
          </div>
        </section>
        <section className="">
          <div className="grid grid-cols-2 gap-5 translate-y-6">
            <div className="bg-[#000000af] rounded-lg p-5">
              <div className="bg-[#414a4d54] p-5 w-[80px] h-[80px] rounded-full grid place-items-center">
                <MdSportsKabaddi color="#f6df01" size={24} />
              </div>
              <h2 className="text-2xl font-bold my-5">
                Generating leads and Conversion
              </h2>
              <p>
                By creating targeted campaigns and landing pages, Microblack
                helps startups generate leads and convert them into customers.
              </p>
            </div>
            <div className="bg-[#000000af] rounded-lg p-5">
              <div className="bg-[#414a4d54] p-5 w-[80px] h-[80px] rounded-full grid place-items-center">
                <MdEngineering color="#f6df01" size={24} />
              </div>
              <h2 className="text-2xl font-bold my-5">
                Generating leads and Conversion
              </h2>
              <p>
                By creating targeted campaigns and landing pages, Microblack
                helps startups generate leads and convert them into customers.
              </p>
            </div>
            <div className="bg-[#000000af] rounded-lg p-5">
              <div className="bg-[#414a4d54] p-5 w-[80px] h-[80px] rounded-full grid place-items-center">
                <MdOutlineLeaderboard color="#f6df01" size={24} />
              </div>
              <h2 className="text-2xl font-bold my-5">
                Generating leads and Conversion
              </h2>
              <p>
                By creating targeted campaigns and landing pages, Microblack
                helps startups generate leads and convert them into customers.
              </p>
            </div>
            <div className="bg-[#000000af] rounded-lg p-5">
              <div className="bg-[#414a4d54] p-5 w-[80px] h-[80px] rounded-full grid place-items-center">
                <MdOutlineAssignment color="#f6df01" size={24} />
              </div>
              <h2 className="text-2xl font-bold my-5">
                Generating leads and Conversion
              </h2>
              <p>
                By creating targeted campaigns and landing pages, Microblack
                helps startups generate leads and convert them into customers.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Service;
