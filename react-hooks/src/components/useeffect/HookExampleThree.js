import React, { useEffect, useState } from "react";
function HookExampleThree() {
  const logMousePointer = (e) => {
    setCountX(e.clientX);
    setCountY(e.clientY);
  };
  const [x, setCountX] = useState(0);
  const [y, setCountY] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePointer);
    return () => {
      console.log("Unmounting code");
      window.removeEventListener("mousemove", logMousePointer);
    };
  });
  return (
    <div>
      <p>Hook example</p>
      Hook x - {x}, y - {y}
    </div>
  );
}

export default HookExampleThree;
