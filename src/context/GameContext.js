import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import { MAP_CONFIG_FIRST } from "../utils/mapConst";

const GameContext = createContext();

function useGame() {
  return useContext(GameContext);
}

function GameProvider({ children }) {
  const [mapSettings, setMapSettings] = useLocalStorage("game", {
    charPos: { x: 32, y: 32 },
    map: "black",
  });

  const [mapData, setMapData] = useState(MAP_CONFIG_FIRST);
  const [charData, setCharData] = useState("red");

  const value = {
    mapData,
    setMapData,
    charData,
    setMapSettings,
    mapSettings,
    setCharData,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export { useGame, GameProvider };
