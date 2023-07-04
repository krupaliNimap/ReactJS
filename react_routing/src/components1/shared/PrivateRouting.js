import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import ContactUs from "../pages/ContactUs";
import Details from "../pages/Details";
import Layout from "../header/Layout";
function PrivateRouting() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/details" element={<Details />} />
              <Route path="/contactus" element={<ContactUs />} />
              {/* <Route path="/details" element={} */}
            </Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}
export default PrivateRouting;
