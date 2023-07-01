import React, { useState } from "react";
function SelectExample() {
  const [fruit, setFruit] = useState("");
  const handleChange = (event) => setFruit(event.target.value);
  return (
    <div>
      <select value={fruit} onChange={handleChange}>
        <option value="Apple">Apple</option>
        <option value="Watermelon">Watermelon</option>
        <option value="Muskmelon">Muskmelon</option>
        <option value="Mango">Mango</option>
      </select>
    </div>
  );
}
export default SelectExample;
