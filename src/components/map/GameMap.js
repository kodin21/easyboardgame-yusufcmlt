import React, { useEffect, useRef, useState } from "react";
import { useGame } from "../../context/GameContext";

import Character from "../character/Character";

import "./GameMap.style.scss";

export default function GameMap() {
  const { mapData, setMapData } = useGame();

  return (
    <div className="game-map__container">
      <Character />
    </div>
  );
}
