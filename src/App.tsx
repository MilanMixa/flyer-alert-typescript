import "./App.css";
import Options from "./components/Options";
import { data } from "./data/optionsData";

function App() {
  return (
    <div className="App">
      <Options optionsArray={data} title={"Product"} />
    </div>
  );
}

export default App;
