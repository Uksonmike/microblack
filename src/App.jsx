// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Solution from "./Pages/Solution/Solution";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/solution" element={<Solution/>}/>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;
