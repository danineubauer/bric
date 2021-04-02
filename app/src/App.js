import logo from "./logo.svg";
import TopBar from "./components/frame/TopBar.js";
import RightBar from "./components/frame/RightBar";
import "./App.css";
import BottomBar from "./components/frame/BottomBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BottomBar />
      <RightBar />
      <header className="App-header"> </header>
    </div>
  );
}

export default App;
