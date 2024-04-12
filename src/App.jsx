import "./App.css";
import Listoption from "./components/Listoption";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Listoption />
        <div className="divider-container">
          <div className="divider"></div>
        </div>
        <Listoption />
        <Listoption />
        <Listoption />
        <div className="divider-container">
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
