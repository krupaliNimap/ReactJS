import React, { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>HooksCounter.js</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment {count}
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement{count}
      </button>
      <h3>{count}</h3>
    </div>
  );
}

export default HooksCounter;
