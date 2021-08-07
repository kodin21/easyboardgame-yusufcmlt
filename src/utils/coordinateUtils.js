import { CHARACTER_SIZE, MAP_CELL_SIZE } from "./mapConst";

function getCoordinates(charPosX, charPosY) {
  const x = Math.floor(charPosX / MAP_CELL_SIZE);
  const y = Math.floor(charPosY / MAP_CELL_SIZE);

  return { x, y };
}

function checkCoordinates(nextCharCoordinates, mapCoordinates) {
  let { x, y } = nextCharCoordinates;
  x += 1;
  y += 1;
  if (mapCoordinates[y] && mapCoordinates[y][x]) {
    return true;
  }
}

export { getCoordinates, checkCoordinates };
