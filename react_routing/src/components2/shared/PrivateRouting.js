import React, { PureComponent } from "react";
import createBrowserRouter from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: rootLoader,
  },
]);
export default router;
