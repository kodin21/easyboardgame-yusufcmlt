import React, { useEffect, useRef, useState } from "react";
import { useGame } from "../../context/GameContext";

import useMultiKeyPress from "../../hooks/useMultiKeyPress";
import { checkCoordinates, getCoordinates } from "../../utils/coordinateUtils";
import {
  CHARACTER_SIZE,
  CHARACTER_SPEED_FAST,
  CHARACTER_SPEED_NORMAL,
} from "../../utils/mapConst";

import "./Character.style.scss";

export default function Character() {
  const charRef = useRef(null);
  const gameKeysPressed = useMultiKeyPress();

  const { charData, mapData, setMapSettings, mapSettings } = useGame();

  const [charX, setCharX] = useState(mapSettings.charPos.x);
  const [charY, setCharY] = useState(mapSettings.charPos.y);

  const [moveSpeed, setMoveSpeed] = useState(CHARACTER_SPEED_NORMAL);

  const moveControl = () => {
    gameKeysPressed.forEach((keyCode) => {
      switch (keyCode) {
        case "KeyW":
        case "ArrowUp":
          moveY(moveSpeed, -1);
          break;
        case "KeyS":
        case "ArrowDown":
          moveY(moveSpeed, 1);
          break;
        case "KeyA":
        case "ArrowLeft":
          moveX(moveSpeed, -1);
          break;
        case "KeyD":
        case "ArrowRight":
          moveX(moveSpeed, 1);
          break;
        default:
          break;
      }
    });
    moveSpeedControl();
  };

  const moveX = (speed, direction) => {
    const nextCoordinates = getCoordinates(charX + speed * direction, charY);
    if (!checkCoordinates(nextCoordinates, mapData.mapBorders)) {
      setCharX(charX + speed * direction);
    }
  };

  const moveY = (speed, direction) => {
    const nextCoordinates = getCoordinates(charX, charY + speed * direction);
    if (!checkCoordinates(nextCoordinates, mapData.mapBorders)) {
      setCharY(charY + speed * direction);
    }
  };

  const moveSpeedControl = () => {
    if (gameKeysPressed.has("Space")) {
      setMoveSpeed(CHARACTER_SPEED_FAST);
    } else {
      setMoveSpeed(CHARACTER_SPEED_NORMAL);
    }
  };

  useEffect(() => {
    moveControl();
    setMapSettings({ ...mapSettings, charPos: { x: charX, y: charY } });
  }, [gameKeysPressed]);

  return (
    <div
      className="character__box"
      ref={charRef}
      style={{
        backgroundColor: charData,
        top: charY,
        left: charX,
        width: CHARACTER_SIZE.width,
        height: CHARACTER_SIZE.height,
      }}
    >
      {CHARACTER_SIZE.width}
    </div>
  );
}
