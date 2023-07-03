import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../header/Layout.js";
import Home from "../pages/Home.js";
import Contact from "../pages/Contact.js";
import Login from "../pages/Login.js";
import Signup from "../pages/Signup.js";
function PrivateRouting() {
  return (
    <h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </h1>
  );
}
export default PrivateRouting;
