import React, { useEffect, useRef, useState } from "react";

import "./Character.style.scss";
export default function Character() {
  const [charX, setCharX] = useState(250);
  const [charY, setCharY] = useState(250);
  const charRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
  }, []);

  const moveX = (moveLength) => {
    setCharX((charX) => charX + moveLength);
  };
  const moveY = (moveLength) => {
    setCharY((charY) => charY + moveLength);
  };

  const checkBorders = () => {
    return true;
  };

  const handleKeyEvent = (event) => {
    console.log(event.code);
    switch (event.code) {
      case "KeyW":
        checkBorders() && moveY(-10);
        break;
      case "KeyS":
        checkBorders() && moveY(10);
        break;
      case "KeyA":
        checkBorders() && moveX(-10);
        break;
      case "KeyD":
        checkBorders() && moveX(10);
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  return (
    <div
      className="character__box"
      ref={charRef}
      style={{ top: charY, left: charX }}
    />
  );
}
