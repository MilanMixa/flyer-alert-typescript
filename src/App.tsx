import { useContext } from "react";

// STYLES:
import "./App.css";

// COMPONENTS:
import Button from "./components/Button";

//CONTAINERS:
import OptionsWrapper from "./containers/OptionsWrapper";

//CONTEXT:
import { OptionsContext } from "./containers/OptionsWrapper/OptionsContext";

function App() {
  const { selected } = useContext(OptionsContext);
  return (
    <div className="App">
      <OptionsWrapper title={"format"} id={0} />
      <OptionsWrapper title={"pages"} id={1} />
      <OptionsWrapper title={"material"} id={2} />
      <OptionsWrapper title={"color"} id={3} />
      {selected.color && <Button name={"Next"} className={"NextButton"} />}
    </div>
  );
}

export default App;
