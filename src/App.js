import { useEffect, useRef } from "react";
import "./App.scss";
import GameMap from "./components/map/GameMap";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current.classList.add("app--opened");
  }, []);

  return (
    <div ref={appRef} className="app">
      <h1 className="app__heading-1">Game Test</h1>
      <GameMap mapHeight="512" mapWidth="640" />
    </div>
  );
}

export default App;
