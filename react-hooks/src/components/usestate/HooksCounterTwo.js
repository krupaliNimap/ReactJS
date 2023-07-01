import React, { useState } from "react";

function HooksCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  function addFive() {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      <p>HooksCounterTwo</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button onClick={addFive}>Increment by 5</button>
      <h3>{count}</h3>
    </div>
  );
}
export default HooksCounterTwo;
