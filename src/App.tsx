import "./App.css";
import Options from "./components/Options";
import { data, data1, data2 } from "./data/optionsData";

function App() {
  return (
    <div className="App">
      <Options optionsArray={data} title={"Product"} />
      <Options optionsArray={data1} title={"Format"} />
      <Options optionsArray={data2} title={"Material"} />
    </div>
  );
}

export default App;
