import React from "react";
function ConditionExampleThree(props) {
  return <div>{props.cars.length > 0 && <h1>hello</h1>}</div>;
}
export default ConditionExampleThree;
