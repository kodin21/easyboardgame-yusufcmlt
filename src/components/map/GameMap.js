import React, { useEffect, useState } from "react";
import Character from "../character/Character";

import "./GameMap.style.scss";

export default function GameMap({ mapWidth, mapHeight }) {
  return (
    <div
      className="game-map__container"
      style={{ width: `${mapWidth}px`, height: `${mapHeight}px` }}
    >
      <Character />
    </div>
  );
}
