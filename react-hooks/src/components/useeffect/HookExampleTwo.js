import React, { useEffect, useState } from "react";

function HookExampleTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect-Update document title");
    document.title = `Click ${count}`;
  }, [count]);
  return (
    <div>
      <p>HookExampleTwo</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </div>
  );
}

export default HookExampleTwo;
