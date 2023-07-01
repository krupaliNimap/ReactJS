import React from "react";
function ListExampleOne() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  function Car(props) {
    return (
      <h1>
        I am {props.key} {props.name}
      </h1>
    );
  }
  return (
    <>
      {cars.map((x) => (
        <Car key={x.id} name={x.brand} />
      ))}
    </>
  );
}
export default ListExampleOne;
