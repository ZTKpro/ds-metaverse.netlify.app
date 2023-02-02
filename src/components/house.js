import "aframe";

import Maserati from "../models/maserati.glb";
import Mclaren from "../models/mclaren.glb";
import Kawasaki from "../models/kawasaki.glb";
import Desk from "../models/work_desk.glb";

function House() {
  const primaryColor = "#035CDB";
  const widthWall = "0.3";
  return (
    <>
      <a-entity
        id="Mclaren"
        gltf-model={Mclaren}
        position="10.94586 0 -5.43442"
      ></a-entity>
      <a-entity
        id="Maserati"
        gltf-model={Maserati}
        position="6.93012 0 1.84891"
        rotation="0 -65 0"
      ></a-entity>
      <a-entity
        id="Kawasaki"
        gltf-model={Kawasaki}
        position="5.49262 0.14614 4.6746"
        rotation="0 -65 0"
      ></a-entity>
      <a-entity
        id="Desk"
        gltf-model={Desk}
        position="3.071 0.7 -4.40029"
        rotation="0 -90 0"
      ></a-entity>

      <a-box
        material="roughness: 1"
        geometry=""
        scale="200 0.1 200"
        color="white"
      ></a-box>
      <a-light type="" light="type: point; intensity: 2.64"></a-light>
      <a-light type="" light="type: ambient"></a-light>
    </>
  );
}

export default House;
