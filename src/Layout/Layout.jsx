/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className="">
      <Header state={darkMode} setState={setDarkMode}/>
      <main className="">
        <Outlet context={[darkMode, setDarkMode]}/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
