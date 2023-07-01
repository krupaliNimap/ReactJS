import "../App.css";
import React from "react";

function Fruit(props) {
  return (
    <div>
      <h1>List of Fruits</h1>
      <p className="fruit">Name: {props.fruits.name}</p>
      <p className="fruit">Color: {props.fruits.color}</p>
    </div>
  );
}

export default Fruit;
