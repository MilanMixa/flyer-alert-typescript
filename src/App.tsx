import "./App.css";
import OptionsWrapper from "./containers/OptionsWrapper";

function App() {
  return (
    <div className="App">
      <OptionsWrapper title={"format"} id={0} />
      <OptionsWrapper title={"pages"} id={1} />
      <OptionsWrapper title={"material"} id={2} />
      <OptionsWrapper title={"color"} id={3} />
    </div>
  );
}

export default App;
