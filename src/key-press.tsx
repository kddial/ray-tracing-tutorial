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
  // camera origin angle is facing -x
  // in clockwise order, -x, -z, x, z  === W N E S
  // forward is -x
  // backward is +x
  // left is +z
  // right is -z
  const moveVector = [0, 0, 0];
  const x = 0;
  const z = 2;
  if (keyPress['w']) {
    moveVector[x] = -1;
  }
  if (keyPress['s']) {
    moveVector[x] = 1;
  }
  if (keyPress['a']) {
    moveVector[z] = +1;
  }
  if (keyPress['d']) {
    moveVector[z] = -1;
  }
  return vecUnit(moveVector);
}

export default keyPress;
