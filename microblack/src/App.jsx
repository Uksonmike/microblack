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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<h1>About page goes here</h1>}/>
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
