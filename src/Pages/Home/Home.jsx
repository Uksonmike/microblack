/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Operation from "./Operation";
import Commitment from "./Commitment";
import Featured from "./Featured";

export default function Home() {
  return (
    <>
      <Hero />
      <Commitment />
      <Operation />
      <Service />
      <Featured />
    </>
  );
}
