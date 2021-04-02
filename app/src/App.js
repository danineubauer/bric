import logo from "./logo.svg";
import TopBar from "./components/frame/TopBar.js";
// import LeftBar from "./components/frame/LeftBar";
import "./App.css";
import BottomBar from "./components/frame/BottomBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BottomBar />

      <header className="App-header"> </header>
    </div>
  );
}

export default App;
