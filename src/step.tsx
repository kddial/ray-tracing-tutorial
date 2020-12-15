import { canvasMainGpu } from './canvas-main-gpu';
import keyPress from './key-press';
import { vecAdd, vecMultiplyNum, vecUnit } from './vector-functions';

const moveMultiplier = 0.2;
const mouseSensitivity = 0.5;
let mouseX = 0;
let mouseY = 0;
let cameraAngleX = 0; // in degrees
let cameraAngleY = 0; // in degrees
let cameraOrigin = [0, 0, 0];

export function setup(
  canvas: HTMLCanvasElement,
  setIsLocked: (value: boolean) => void,
) {
  // mouse lock
  canvas.onclick = () => {
    canvas.requestPointerLock();
  };

  function lockChangeAlert() {
    if (document.pointerLockElement === canvas) {
      setIsLocked(true);
      console.log('locked');
      document.addEventListener('mousemove', updatePosition, false);
    } else {
      setIsLocked(false);
      console.log('unlocked');
      document.removeEventListener('mousemove', updatePosition, false);
    }
  }
  document.addEventListener('pointerlockchange', lockChangeAlert, false);

  const kernal = canvasMainGpu(canvas);
  return kernal;
}

function updatePosition(e: MouseEvent) {
  mouseX += e.movementX * mouseSensitivity;
  mouseY += e.movementY * mouseSensitivity;
}

export function step(
  kernal: any,
  setUICameraAngleX: (value: number) => void,
  setUICameraAngleY: (value: number) => void,
  setUICameraOrigin: (origin: number[]) => void,
) {
  function step() {
    // update camera
    cameraAngleX = (cameraAngleX + mouseX) % 360;
    cameraAngleY = mathClamp(cameraAngleY + mouseY, -45, 45);
    mouseX = 0;
    mouseY = 0;

    cameraOrigin = vecAdd(
      cameraOrigin,
      vecMultiplyNum(getMoveVector(), moveMultiplier),
    );

    // render graphics
    kernal(cameraOrigin, cameraAngleX, cameraAngleY);

    // set game info for React UI
    setUICameraAngleX(cameraAngleX);
    setUICameraAngleY(cameraAngleY);
    setUICameraOrigin(cameraOrigin);
    window.requestAnimationFrame(step);
  }
  step();
}

function mathClamp(num: number, min: number, max: number): number {
  return num <= min ? min : num >= max ? max : num;
}

function getMoveVector() {
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
