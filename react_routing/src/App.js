import React from "react";
import PrivateRouting from "./components2/shared/PrivateRouting";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <RouterProvider router={PrivateRouting} />
    </>
  );
}
export default App;
