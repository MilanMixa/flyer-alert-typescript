import "./App.css";
import Options from "./components/Options";
import { data, data1, data2 } from "./data/optionsData";

function App() {
  return (
    <div className="App">
      <Options optionsArray={data} title={"Product"} id={0} />
      <Options optionsArray={data1} title={"Format"} id={1} />
      <Options optionsArray={data2} title={"Material"} id={2} />
    </div>
  );
}

export default App;
