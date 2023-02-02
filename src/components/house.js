import "aframe";

// import Couch from "../models/couch.glb";

function House() {
  return (
    <>
      <a-box scale="25 0.1 25" material="roughness: 0.8" color="black"></a-box>
      <a-entity
        id="Bag"
        gltf-model="/static/media/bag.82f4a8a4add5fcc73c91.glb"
        scale="0.001 0.001 0.001"
        position="-4.11123 0 7.12691"
      ></a-entity>
      <a-entity
        id="Gym"
        gltf-model="/static/media/gym.74ff75eb605c8b2f9e5f.glb"
        position="-1.08513 1.05272 6.03311"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        id="Couch"
        gltf-model="/static/media/couch.d707aa2a86fbaaa32c47.glb"
        scale="0.005 0.005 0.005"
        rotation="0 180 0"
      ></a-entity>
      <a-entity
        id="Mclaren"
        gltf-model="/static/media/mclaren.613298b83207f979acdc.glb"
        position="6.38411 0 2.66325"
        rotation="0 -130 0"
      ></a-entity>
      <a-entity
        id="Maserati"
        gltf-model="/static/media/maserati.162263bbbe981df8d355.glb"
        position="6.61194 0 6.61513"
        rotation="0 -130 0"
      ></a-entity>
      <a-entity
        id="Kawasaki"
        gltf-model="/static/media/kawasaki.a54cea0f37e0cb8446af.glb"
        position="5.54428 0.14614 8.60233"
        rotation="0 -130 0"
      ></a-entity>
      <a-box
        id="main-wall-opacity"
        material="opacity: 0.08"
        geometry=""
        scale="0.3 3 9.56313"
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
        id="Display"
        material=""
        geometry=""
        scale="7.03596 2.49873 0.3"
        position="-0.94317 1.624 -3.982"
        src="/static/media/bg.498c964d2b74bc9cd3a4.png"
        roughness="0"
      ></a-box>
      <a-box
        id="main-wall-left"
        material=""
        geometry=""
        color="#000000"
        scale="0.3 3 13.42753"
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
        light="type: point; intensity: 10; color: #ffffff"
        position="-1.52658 6.81507 3.28287"
        id="main-light-2"
      ></a-light>
    </>
  );
}

export default House;
