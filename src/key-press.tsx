import { vecUnit } from './vector-functions';

export const keyPress: { [key: string]: number } = {};

function keyUpListener(event: KeyboardEvent) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = 0;
}

function keyDownListener(event: KeyboardEvent) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = Date.now();
}

window.addEventListener('keydown', keyDownListener, false);
window.addEventListener('keyup', keyUpListener, false);

export function getMoveVector() {
  const moveVector = [0, 0, 0];
  const x = 0;
  const z = 2;
  if (keyPress['w']) {
    moveVector[z] = -1;
  }
  if (keyPress['a']) {
    moveVector[x] = -1;
  }
  if (keyPress['s']) {
    moveVector[z] = 1;
  }
  if (keyPress['d']) {
    moveVector[x] = 1;
  }
  return vecUnit(moveVector);
}

export default keyPress;
