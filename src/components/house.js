import "aframe";

import Maserati from "../models/maserati.glb";
import Mclaren from "../models/mclaren.glb";
import Kawasaki from "../models/kawasaki.glb";
import Desk from "../models/work_desk.glb";

function House() {
  // const primaryColor = "#035CDB";
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
        gltf-model="/static/media/maserati.162263bbbe981df8d355.glb"
        position="6.61194 0 2.77961"
        rotation="0 -130 0"
      ></a-entity>
      <a-entity
        id="Kawasaki"
        gltf-model="/static/media/kawasaki.a54cea0f37e0cb8446af.glb"
        position="5.54428 0.14614 4.36576"
        rotation="0 -130 0"
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
        color="black"
      ></a-box>
      <a-box
        id="main-wall-opacity"
        material="opacity: 0.08"
        geometry=""
        scale={`${widthWall} 3 9.56313`}
        position="3.6 1.550 4.82812"
      ></a-box>
      <a-box
        id="main-wall-right"
        material=""
        geometry=""
        scale="0.3 3 4.21596"
        color="#000000"
        position="3.6 1.55 -2.0481"
      ></a-box>
      <a-box
        id="main-wall-front"
        material=""
        geometry=""
        color="#000000"
        scale="9.32185 3 0.3"
        position="-1.10326 1.55 -4.01051"
      ></a-box>
      <a-box
        id="main-wall-left"
        material=""
        geometry=""
        color="#000000"
        scale={`${widthWall} 3 13.42753`}
        position="-5.60873 1.55 2.63505"
      ></a-box>
      <a-box
        id="main-wall-back"
        material=""
        geometry=""
        color="#000000"
        scale="9.53124 3 0.3"
        position="-0.97538 1.55 9.49451"
      ></a-box>
      <a-light
        type=""
        light="type: point; intensity: 4.81; shadowMapWidth: 512.21"
      ></a-light>
    </>
  );
}

export default House;
