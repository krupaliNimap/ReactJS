import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components2/header/Layout";
import Details from "../../components2/pages/Details";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default PrivateRouting;
