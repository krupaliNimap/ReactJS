import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <div className="nav">
        <div className="demo1">
          <img
            alt="Logo"
            src={require("../assets/7.jpg")}
            height="70rem"
            width="70rem"
          />
        </div>
        <div>
          <Link className="demo2" to="/">
            Home
          </Link>
          <Link className="demo2" to="/details">
            Details
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
