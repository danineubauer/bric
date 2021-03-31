import logo from "./logo.svg";
import TopBar from "./components/frame/TopBar.js";
import LeftBar from "./components/frame/LeftBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <LeftBar />
      <header className="App-header"> </header>
    </div>
  );
}

export default App;
