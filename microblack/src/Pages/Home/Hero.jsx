/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../Components/Button";
import img from "../../assets/light.png";

function Hero() {
  return (
    <section className="bg-[#ece9e6] lg:px-10 lg:py-16 grid grid-cols-16 h-[600px] overflow-hidden">
      <section className="flex flex-col justify-center items-center">
        <div className="w-[600px]">
          <h1 className="text-5xl font-semibold">
            Innovative solutions for outstanding growth.
          </h1>
          <p className="my-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quidem inventore in beatae distinctio non quas! Deserunt ex omnis
            error, perspiciatis obcaecati quidem magni exercitationem inventore
            earum? Assumenda fuga ratione magnam quo ipsa rerum dicta a,
            architecto praesentium esse placeat inventore similique dignissimos
            deleniti voluptatem distinctio vel fugit? Iusto, ea!
          </p>
          <Button to={"about"} text={"Build Now"} />
        </div>
      </section>
      <section className="grid place-items-center relative">
        <div className="w-[400px] absolute -top-36 right-[50px]">
          <img src={img} className="w-full" alt="" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
