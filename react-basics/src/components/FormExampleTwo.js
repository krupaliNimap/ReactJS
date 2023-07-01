import React, { useState } from "react";
function FormExampleTwo() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered is : ${name}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name :
          <input
            type={Text}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <input type="submit"></input>
      </form>
    </>
  );
}
export default FormExampleTwo;
