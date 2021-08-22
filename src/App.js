import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home className="content" />
      </div>
    </div>
  );
}

export default App;
