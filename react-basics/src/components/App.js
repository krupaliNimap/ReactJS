import "../App.css";
import Car from "./Car";
import Fruit from "./Fruit";
import ConditionExample from "./ConditionExampleOne.js";
import ConditionExampleTwo from "./ConditionExampleTwo.js";
import ConditionExampleThree from "./ConditionExampleThree.js";
import ListExampleOne from "./ListExampleOne.js";
import ListExampleTwo from "./ListExampleTwo.js";
import FormExampleOne from "./FormExampleOne.js";
import FormExampleTwo from "./FormExampleTwo.js";
import FormExampleThree from "./FormExampleThree.js";
import TextareaExample from "./TextareaExample";
import SelectExample from "./SelectExample";
import Todo from "./Todo";

function App() {
  const fruits = {
    name: "Mango",
    color: "Yellow",
  };
  const cars = [];

  return (
    <div className="App">
      <Fruit fruits={fruits} />
      <hr></hr>
      <Car />
      <hr></hr>
      Condition : if condition
      <ConditionExample isGoal={true} />
      <hr></hr>
      Condition : Ternary Operator
      <ConditionExampleTwo isGoal={false} />
      <hr></hr>
      Condition : Logical && Operator
      <ConditionExampleThree cars={cars} />
      <hr></hr>
      Rendering through list.
      <ListExampleOne />
      <hr></hr>
      Rendering through list with key/id.
      <ListExampleTwo />
      <hr></hr>
      Handling forms with the useState
      <FormExampleOne />
      <hr></hr>
      Handling Forms with the useState and submit button
      <FormExampleTwo />
      <hr></hr>
      Handling forms with multiple input fields.
      <FormExampleThree />
      <hr></hr>
      Handling events with text area.
      <TextareaExample />
      <hr></hr>
      Handling Select dropdown with useState.
      <SelectExample />
      <hr></hr>
      Todo
      <Todo />
    </div>
  );
}
export default App;
