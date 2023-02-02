import "aframe";

function House() {
  const primaryColor = "#035CDB";
  const widthWall = "0.3";
  return (
    <>
      {/* Floor */}
      <a-box id="main-floor" material="" geometry="" scale="5 0.10 5"></a-box>
      <a-box
        material=""
        geometry=""
        scale="5 0.10 2.85971"
        position="2 0 1.5"
      ></a-box>
      {/* Tele zone */}
      {/* Tele floor */}
      <a-box
        id="main-floor-second"
        material=""
        geometry=""
        scale={`${widthWall} 3 5.08109`}
        position="-2.62801 0.75 -0.21438"
        rotation=""
      ></a-box>
      <a-box
        material=""
        geometry=""
        scale="0.691 1.046 2.86"
        position="2.454 -0.48567 -1.343"
      ></a-box>
      <a-box
        material=""
        geometry=""
        scale="1.80523 1.04594 0.45976"
        position="3.49178 -0.48343 -0.12701"
      ></a-box>
      <a-box
        material=""
        geometry=""
        scale="2.91263 0.31596 3.05042"
        position="3.50648 -0.48567 -1.343"
      ></a-box>
      {/* Tele Walls */}
      <a-box
        material=""
        geometry=""
        scale="1.28686 3 0.207"
        position="4.81037 0.75 -0.47942"
        rotation="0 38.131 0"
      ></a-box>
      <a-box
        material=""
        geometry=""
        scale="0.194 3 1.7"
        position="5.22812 0.75491 -1.88334"
        rotation=""
      ></a-box>
      {/* Walls */}
      <a-box
        material=""
        geometry=""
        position="4.8847 -0.483 -0.53794"
        rotation="0 38.13148718154655 0"
      ></a-box>
      <a-box
        material=""
        geometry=""
        scale="8.34561 3 0.20537"
        position="1.20016 0.75 -2.58399"
        rotation=""
      ></a-box>
      {/* Lights */}
      <a-entity
        light="intensity: 0.89; color: #1b0066; type: point"
        position="4.03613 1 -1.75531"
      ></a-entity>
      <a-entity light="intensity: 0.56" position=" 0 1 0"></a-entity>
    </>
  );
}

export default House;
