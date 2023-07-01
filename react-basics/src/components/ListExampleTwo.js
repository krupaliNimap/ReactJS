import React from "react";
function ListExampleTwo() {
  const cars = [
    { id: 1, carName: "Audi" },
    { id: 2, carName: "BMW" },
    { id: 3, carName: "Tesla" },
  ];
  function Car(props) {
    return <h1>I am {props.brand}</h1>;
  }
  return cars.map((x) => <Car key={x.id} brand={x.carName}></Car>);
}
export default ListExampleTwo;
