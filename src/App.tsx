import "./css/App.css";
import InputOutput from "./components/InputOutput";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Walking <span>Robot</span> App
        </p>
      </header>
      <div className="App-body">
        <InputOutput></InputOutput>
      </div>
    </div>
  );
};

export default App;
