import React, { useState } from "react";

function HooksCounterFour() {
  const [items, setItems] = useState([]);
  const addNum = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <p>Hooks State for an array.</p>
      <button onClick={addNum}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HooksCounterFour;
