import "./App.css";
import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import room from "./models/room.glb";

function App() {
  const loader = new GLTFLoader();

  loader.load(room, (d) => {
    const entity = document.getElementById("room");
    entity.object3D.add(d.scene);
  });
  return (
    <a-scene>
      <a-entity light="castShadow: true"></a-entity>
      <a-entity id="room" gltf-model={room} position="0 0 0"></a-entity>
      <a-light
        id="dirlight"
        intensity="1"
        light="castShadow:true;type:directional"
        position="0 1 0"
      ></a-light>
    </a-scene>
  );
}

export default App;
