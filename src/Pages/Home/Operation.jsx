/* eslint-disable no-unused-vars */
import React from "react";
import { RiFocus2Line, RiFlagLine, RiSearchEyeLine } from "react-icons/ri";
import AboutUsTextBox from "../../Components/AboutUsTextBox";
import { useOutletContext } from "react-router-dom"; 

function Operation() {
    const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section className={`${darkMode ? "bg-[#212121] text-white" : "bg-[#ece9e6]"} lg:px-10 md:px-10 px-5 lg:py-32 py-20`}>
      <div className="">
        <p className="font-bold uppercase md:text-base text-sm">All you need to know</p>
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold lg:mb-20 mb-20 mt-5">About Us</h2>
      </div>
      <div className="grid md:grid-cols-3 lg:gap-20 md:gap-5 mt-5 justify-center">
        <AboutUsTextBox
          heading="Objective"
          text="Our main objective is to help companies achieve their growth and
            revenue goals by leveraging various digital marketing channels and
            techniques"
        >
          <RiFocus2Line size={40} />
        </AboutUsTextBox>
        <AboutUsTextBox
          heading="Mission"
          text="Our mission is to provide businesses with the expertise and resources they need to succeed in the digital landscape by developing and implementing effective digital marketing strategies that help them reach their growth goals."
        >
          <RiFlagLine size={40} />
        </AboutUsTextBox>
        <AboutUsTextBox
          heading="Vision"
          text="To be Africa's leading sales, business development and digital marketing agency, dedicated to helping businesses achieve their growth and revenue goals by delivering innovative and results-driven solutions."
        >
          <RiSearchEyeLine size={40} />
        </AboutUsTextBox>
      </div>
    </section>
  );
}

export default Operation;
