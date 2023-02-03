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
        position="3.422 1.58473 -1.905"
        rotation="0 -90 0"
        scale="3 2.8 1"
        roughness="0"
      ></a-plane>
    </>
  );
}
