import "aframe";

import Travel from "./travel";

import Ar from "../models/ar.glb";
import Bag from "../models/bag.glb";
import Backpack from "../models/backpack.glb";
import Gym from "../models/gym.glb";
import Couch from "../models/couch.glb";
import Laptop from "../models/laptop.glb";
import Mclaren from "../models/mclaren.glb";
import Maserati from "../models/maserati.glb";
import Kawasaki from "../models/kawasaki.glb";
import DisplayImg from "../models/bg.png";
import Light from "../models/light.png";
import Pause from "../models/pause.png";
import Play from "../models/play.png";
import { useEffect, useState } from "react";

function House() {
  const [music, setMusic] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const getLight = document.getElementById("light");
    const getPlayer = document.getElementById("player");

    [getLight, getPlayer].forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        elem.setAttribute("opacity", "0.9");
      });
      elem.addEventListener("mouseleave", function () {
        elem.setAttribute("opacity", "0.5");
      });
    });
  }, []);

  useEffect(() => {
    const getPlayer = document.getElementById("player");

    const changeSrc = () => {
      if (music) {
        getPlayer.setAttribute("src", Play);
        getPlayer.setAttribute("color", "#FFF");
      } else {
        getPlayer.setAttribute("src", Pause);
        getPlayer.setAttribute("color", "#00a9ff");
      }

      setMusic(!music);
    };

    getPlayer.addEventListener("click", changeSrc);

    return () => {
      getPlayer.removeEventListener("click", changeSrc);
    };
  }, [music]);

  useEffect(() => {
    const getLight = document.getElementById("light");

    const changeSrc = () => {
      light
        ? getLight.setAttribute("color", "#FFF")
        : getLight.setAttribute("color", "#00a9ff");

      setLight(!light);
    };

    getLight.addEventListener("click", changeSrc);

    return () => {
      getLight.removeEventListener("click", changeSrc);
    };
  }, [light]);

  return (
    <>
      <a-box
        id="Floor"
        scale="25 0.1 25"
        material="roughness: 0.1"
        color="black"
        shader="flat"
        geometry=""
      ></a-box>
      <Travel />
      <a-entity
        id="Bag"
        gltf-model={Bag}
        scale="0.001 0.001 0.001"
        position="-4.11123 0 7.12691"
      ></a-entity>
      <a-entity
        id="Gym"
        gltf-model={Gym}
        position="-1.08513 1.05272 6.03311"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        id="Couch"
        gltf-model={Couch}
        scale="0.005 0.005 0.005"
        rotation="0 180 0"
      ></a-entity>
      <a-entity
        id="Laptop"
        gltf-model={Laptop}
        rotation="0 35 0"
        position="-1.98979 0.66 -1.13224"
      ></a-entity>
      <a-entity
        id="Backpack"
        gltf-model={Backpack}
        rotation="-9.38963234660393 82.858291542844 0"
        position="1.81567 0.32918 0.39574"
        scale="0.38 0.3 0.3"
      ></a-entity>
      <a-entity
        id="Ar"
        gltf-model={Ar}
        position="1.71628 0.37976 -0.03736"
        rotation="-37.66327 0.19881635491039565 -0.2589769233991321"
      ></a-entity>
      <a-entity
        id="Mclaren"
        gltf-model={Mclaren}
        position="6.38411 0 2.66325"
        rotation="0 -130 0"
      ></a-entity>
      <a-entity
        id="Maserati"
        gltf-model={Maserati}
        position="6.61194 0 6.61513"
        rotation="0 -130 0"
      ></a-entity>
      <a-entity
        id="Kawasaki"
        gltf-model={Kawasaki}
        position="1.4903 0.14614 8.25573"
        rotation="0 -130 0"
      ></a-entity>
      <a-box
        id="Display"
        material=""
        geometry=""
        scale="7.03596 2.49873 0.3"
        position="-0.94317 1.624 -3.982"
        src={DisplayImg}
        roughness="0"
        shader="flat"
      >
        <a-plane
          id="light"
          material=""
          geometry=""
          position="-0.1 0 0.6"
          scale="0.072 0.18054 1"
          shader="flat"
          src={Light}
          opacity="0.5"
          animation_scale="property: opacity; to: 1 1 1; dur: 200; startEvents: mouseenter"
          animation_scale_reverse="property: opacity; to: 0.5 0.5 0.5; dur: 200; startEvents: mouseleave"
        ></a-plane>
        <a-plane
          id="player"
          material=""
          geometry=""
          position="0.1 0 0.6"
          scale="0.072 0.18054 1"
          shader="flat"
          src={music ? Pause : Play}
          opacity="0.5"
        ></a-plane>
      </a-box>
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
        light="type: spot; intensity: 12; color: #ffffff; angle: 30; target: #Bag; penumbra: 1"
        position="-3.34512 4.41342 5.54072"
        id="main-light-bag"
      ></a-light>
      <a-light
        type=""
        light="type: spot; intensity: 1;  angle: 70; target: #Display; penumbra: 1"
        position="0 7 5"
        id="main-light-display"
      ></a-light>

      {/* added lighting */}
      <a-light
        light="type: spot; angle: 150; target: #Couch; penumbra: 1;"
        intensity={light ? 3 : 0}
        position="-1 7 0"
        id="main-light-couch"
      ></a-light>
      <a-light
        light="type: spot; angle: 40; target: #Kawasaki; penumbra: 1;"
        intensity={light ? 3 : 0}
        position="1.2 5 8"
        id="main-light-kawasaki"
      ></a-light>

      <a-camera>
        <a-cursor color="#1aaffc"></a-cursor>
      </a-camera>
    </>
  );
}

export default House;
