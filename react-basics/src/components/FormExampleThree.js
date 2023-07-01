import React, { useState } from "react";
function FormExampleThree() {
  const [inputs, setInputs] = useState({});
  function abc(event) {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    return <h1>{inputs}</h1>;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name :
        <input
          name="username"
          type={Text}
          onChange={abc}
          value={inputs.username}
        ></input>
      </label>
      <br></br>
      <label>
        Enter your age :
        <input
          name="age"
          value={inputs.age}
          type={Number}
          onChange={abc}
        ></input>
      </label>
      <br></br>
    </form>
  );
}

export default FormExampleThree;
