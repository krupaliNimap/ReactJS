import React, { useEffect, useState } from "react";

function HookExampleOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count ${count + 90}`;
  });
  return (
    <div>
      <p>Hook Effect Example One(document title)</p>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default HookExampleOne;
