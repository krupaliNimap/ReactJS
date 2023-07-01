import React, { useState } from "react";
function FormExampleOne() {
  const [name, setName] = useState("");
  return (
    <>
      <form>
        <label>
          Enter your name:
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </label>
        <h1>Entered name is: {name}</h1>
      </form>
    </>
  );
}
export default FormExampleOne;
