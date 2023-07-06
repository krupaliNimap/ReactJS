import React from "react";
import PrivateRouting from "./components2/shared/PrivateRouting";
import { RouterProvider } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={PrivateRouting} />
      </div>
    </>
  );
}
export default App;
