import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./components/pages/Home.js";
import Contact from "./components/pages/Contact.js";
import Login from "./components/pages/Login.js";
import Signup from "./components/pages/Signup.js";
function App() {
  return (
    <h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact.js" element={<Contact />} />
            <Route path="/Login.js" element={<Login />} />
            <Route path="/Signup.js" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </h1>
  );
}
export default App;
