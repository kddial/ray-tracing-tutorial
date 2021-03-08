// @ts-nocheck
import { canvasMainGpu } from './canvas-main-gpu';
import keyPress from './key-press';
import { vecAdd, vecMultiplyNum, vecUnit } from './vector-functions';
import Stats from 'stats.js';
import { shouldStop } from './url-params';
import { joystickSetup, joystickMovement, joystickCamera } from './joystick';

let fpsStats = new Stats();
const moveMultiplier = 0.04;
let mouseX = 0;
let mouseY = 0;
let cameraAngleX = 50; // in degrees
let cameraAngleY = 0; // in degrees
const CAMERA_INIT_Y = 0.5;
let cameraOrigin = [14, CAMERA_INIT_Y, 14];
const CAMERA_JOYSTICK_BASE_SENSITIVITY = 0.08;

const sphereEntities = [
  // radius, center x, y, z
  [0.5, 0, 8, 0], // sun
  [0.5, 15, 0, 15], // sphere
];
function createSpheresOnAxis() {
  const radius = 0.05;
  const distBetween = 0.1;
  const num = 10;
  for (let i = 0; i < num; i++) {
    sphereEntities.push([radius, i * distBetween, 0, 0]);
    sphereEntities.push([radius, 0, i * distBetween, 0]);
    sphereEntities.push([radius, 0, 0, i * distBetween]);
  }
}
createSpheresOnAxis();

function createSquareMap() {
  const radius = 0.05;
  const distBetween = 1.0;
  const cornerDistance = 10;

  for (let i = 0; i <= cornerDistance; i = i + distBetween) {
    sphereEntities.push([radius, i, 0, 0]);
    sphereEntities.push([radius, 0, 0, i]);
    sphereEntities.push([radius, i, 0, i]);
    sphereEntities.push([radius, cornerDistance, 0, i]);
    sphereEntities.push([radius, i, 0, cornerDistance]);
  }
  sphereEntities.push([radius * 2, cornerDistance, 0, cornerDistance]);
}
createSquareMap();

// radius, centerx, y, z, normalx, y, z
const planeEntities = [
  [20, 0, 0, 0, 0, 1, 0],
  [5, 0, 9, 0, 0, 1, 0],
  [1, 0, 0.9, 0, 0, 1, 0.4],
];

// pointMin left bottom corner (AAA), pointMax right top corner (BBB)
const boxEntities = [[4, 0, 0, 6, 2, 2]];

export function setup(
  canvas: HTMLCanvasElement,
  setIsLocked: (value: boolean) => void,
) {
  // fps counter
  fpsStats.showPanel(0);
  document.body.appendChild(fpsStats.dom);

  if (window.isMobile) {
    // is mobile

    // setup virtual joysticks
    joystickSetup();
  } else {
    // is desktop

    // canvas mouse lock
    canvas.onclick = () => {
      canvas.requestPointerLock();
    };
    function lockChangeAlert() {
      if (document.pointerLockElement === canvas) {
        setIsLocked(true);
        document.addEventListener('mousemove', updateCameraMouse, false);
      } else {
        setIsLocked(false);
        document.removeEventListener('mousemove', updateCameraMouse, false);
      }
    }
    document.addEventListener('pointerlockchange', lockChangeAlert, false);
  }

  const kernal = canvasMainGpu(canvas);
  return kernal;
}

function updateCameraMouse(e: MouseEvent) {
  mouseX += e.movementX * window.mouseSensitivity;
  mouseY += e.movementY * window.mouseSensitivity;
}

function updateCameraJoystick() {
  if (joystickCamera.ids.length) {
    const joystickPos = joystickCamera.get(joystickCamera.ids[0]).frontPosition;
    mouseX +=
      joystickPos.x *
      CAMERA_JOYSTICK_BASE_SENSITIVITY *
      window.mouseSensitivity;
    mouseY +=
      joystickPos.y *
      CAMERA_JOYSTICK_BASE_SENSITIVITY *
      window.mouseSensitivity;
  }
}

export function step(
  kernal: any,
  setUICameraAngleX: (value: number) => void,
  setUICameraAngleY: (value: number) => void,
  setUICameraOrigin: (origin: number[]) => void,
) {
  const shouldStopAnimate = shouldStop();

  function step() {
    fpsStats.begin();
    // update camera
    if (window.isMobile) {
      // should update on each step, differant than mouse which is update on mouse move event
      updateCameraJoystick();
    }

    cameraAngleX = (cameraAngleX + mouseX) % 360;
    cameraAngleY = mathClamp(cameraAngleY + mouseY, -85, 85);
    mouseX = 0;
    mouseY = 0;

    cameraOrigin = vecAdd(
      cameraOrigin,
      vecMultiplyNum(getMoveVector(cameraOrigin), moveMultiplier),
    );

    // render graphics
    kernal(
      cameraOrigin,
      cameraAngleX,
      cameraAngleY,
      sphereEntities,
      sphereEntities.length,
      planeEntities,
      planeEntities.length,
      boxEntities,
      boxEntities.length,
    );

    // set game info for React UI
    setUICameraAngleX(cameraAngleX);
    setUICameraAngleY(cameraAngleY);
    setUICameraOrigin(cameraOrigin);
    fpsStats.end();
    shouldStopAnimate === false && window.requestAnimationFrame(step);
  }
  step();
}

function mathClamp(num: number, min: number, max: number): number {
  return num <= min ? min : num >= max ? max : num;
}

function getMoveVector(cameraOrigin: number[]) {
  /* in ray tracing land
                                 -z
                                  |
  camera origin(forward)   -x  ---+--- +x
                                  |
                                 +z
  */
  // camera origin angle is facing -x
  // forward is -x
  // backward is +x
  // left is +z
  // right is -z
  let moveVector = [0, 0, 0];
  const x = 0;
  const y = 1;
  const z = 2;

  if (window.isMobile === false) {
    /* in keyboard WASD land
       need to rotate ccw by 90 degrees to match the forwards
            w(forward)
            |
      a  ---+---  d
            |
            s
    */
    if (keyPress['w']) {
      moveVector[x] = -1;
    }
    if (keyPress['s']) {
      moveVector[x] = 1;
    }
    if (keyPress['a']) {
      moveVector[z] = 1;
    }
    if (keyPress['d']) {
      moveVector[z] = -1;
    }
  } else {
    /* in joystick land (nipplejs)
       need to rotate ccw by 90 degrees to match the forwards
           -y(forward)
            |
     -x  ---+--- +x
            |
           +y
    */
    if (joystickMovement.ids.length) {
      const joystickPos = joystickMovement.get(joystickMovement.ids[0])
        .frontPosition;
      moveVector[x] = joystickPos.y;
      moveVector[z] = joystickPos.x * -1;
    }
  }
  moveVector = vecUnit(moveVector);

  // rotate moveVector by cameraAngleX in counter-clockwise rotation
  // x' = x·cosθ - y·sinθ
  // y' = x·sinθ + y·cosθ
  // in our 3d space looking from birds-eye view, x-axis is x and z-axis is y.
  const oldX = moveVector[x];
  const oldZ = moveVector[z];
  const theta = (cameraAngleX * Math.PI) / 180;
  const newX = oldX * Math.cos(theta) - oldZ * Math.sin(theta);
  const newZ = oldX * Math.sin(theta) + oldZ * Math.cos(theta);
  moveVector[x] = newX;
  moveVector[z] = newZ;

  // jump and gravity
  if (keyPress[' ']) {
    moveVector[y] = 1;
  } else {
    if (cameraOrigin[y] > CAMERA_INIT_Y) {
      moveVector[y] = -1;
    }
  }

  return moveVector;
}
