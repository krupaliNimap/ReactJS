import React, { useEffect, useState } from "react";

function HooksExampleFive() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }
    doSomething();
    const interval = setInterval(tick, 1000);
  }, [count]);

  return (
    <div>
      Hooks Interval Code
      {count}
    </div>
  );
}

export default HooksExampleFive;
