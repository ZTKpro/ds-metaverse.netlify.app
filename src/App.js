import "./App.css";
import "aframe";

import House from "./components/house";

function App() {
  const primaryColor = "#035CDB";
  return (
    <a-scene>
      <a-sky color="#000000"></a-sky>
      <House />
    </a-scene>
  );
}

export default App;
