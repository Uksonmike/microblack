/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
