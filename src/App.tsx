import "./App.css";
import OptionsWrapper from "./containers/OptionsWrapper";
import { data, data1, data2, data3 } from "./data/optionsData";

function App() {
  return (
    <div className="App">
      <OptionsWrapper optionsArray={data} title={"format"} id={0} />
      <OptionsWrapper optionsArray={data1} title={"pages"} id={1} />
      <OptionsWrapper optionsArray={data2} title={"material"} id={2} />
      <OptionsWrapper optionsArray={data3} title={"color"} id={3} />
    </div>
  );
}

export default App;
