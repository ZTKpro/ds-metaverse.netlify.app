import "aframe";

import Map from "../models/map.png";

export default function Travel() {
  return (
    <>
      <a-plane
        material=""
        geometry=""
        id="map"
        src={Map}
        position="3.42162 1.5 -1.90492"
        rotation="0 -90 0"
        scale="3 2.8 1"
        roughness="0"
      ></a-plane>
    </>
  );
}
