import React from "react";

function ConditionExample(props) {
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }
  function MissedGoal() {
    return <h1>Missed!</h1>;
  }
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  } else {
  }
  return <MissedGoal />;
}

export default ConditionExample;
