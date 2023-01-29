import logo from "./logo.svg";
import "./App.css";
import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sky from "./stars.jpg";

function App() {
  const loader = new GLTFLoader();
  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} alt="sky" />
      </a-assets>
      <a-sky color="#FFFFFFF" material="src: sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;
