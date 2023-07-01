import React, { useState } from "react";
import HookExampleThree from "./HookExampleThree";

function HookExampleFour() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <p>Hook Effect to remove display</p>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Button
      </button>
      {display && <HookExampleThree></HookExampleThree>}
    </div>
  );
}

export default HookExampleFour;
