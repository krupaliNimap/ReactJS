import React, { useState } from "react";
function Car() {
  const [state, setState] = useState("Ferrari");
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState("Jaguar");
        }}
      >
        Change
      </button>
    </div>
  );
}
export default Car;
