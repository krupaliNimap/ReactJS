import "./App.css";
import HooksCounter from "./components/usestate/HooksCounter";
import HooksCounterTwo from "./components/usestate/HooksCounterTwo";
import HooksCounterThree from "./components/usestate/HooksCounterThree";
import HooksCounterFour from "./components/usestate/HooksCounterFour";
import HookExampleOne from "./components/useeffect/HookExampleOne";
import HookExampleTwo from "./components/useeffect/HookExampleTwo";
import HookExampleThree from "./components/useeffect/HookExampleThree";
import HookExampleFour from "./components/useeffect/HookExampleFour";

function App() {
  return (
    <div className="App">
      <HooksCounter></HooksCounter>
      <hr></hr>
      <HooksCounterTwo></HooksCounterTwo>
      <hr></hr>
      <HooksCounterThree></HooksCounterThree>
      <hr></hr>
      <HooksCounterFour></HooksCounterFour>
      <hr></hr>
      <HookExampleOne></HookExampleOne>
      <hr></hr>
      <HookExampleTwo></HookExampleTwo>
      <hr></hr>
      <HookExampleThree></HookExampleThree>
      <hr></hr>
      <HookExampleFour></HookExampleFour>
    </div>
  );
}

export default App;
