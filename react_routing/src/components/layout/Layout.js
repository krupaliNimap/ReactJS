import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact.js">Contact</Link>
          </li>
          <li>
            <Link to="/Login.js">Login</Link>
          </li>
          <li>
            <Link to="/Signup.js">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout;
