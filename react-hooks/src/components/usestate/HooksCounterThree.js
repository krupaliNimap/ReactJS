import React, { useState } from "react";

function HooksCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <p>Hooks State for object</p>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <p>First Name is : {name.firstName}</p>
      <p>Last Name is : {name.lastName}</p>
    </div>
  );
}

export default HooksCounterThree;
