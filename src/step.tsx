import { canvasMainGpu } from './canvas-main-gpu';

const mouseSensitivity = 0.5;
let mouseX = 0;
let mouseY = 0;
let cameraAngleX = 90; // in degrees
let cameraAngleY = 0; // in degrees

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

export function step(kernal: any, setCameraAngleX: (value: number) => void) {
  const cameraOrigin = [0, 0, 0];

  function step() {
    kernal(cameraOrigin, cameraAngleX, cameraAngleY);
    cameraAngleX = (cameraAngleX + mouseX) % 360;
    cameraAngleY = cameraAngleY + mouseY; // -80 to +80 TODO
    setCameraAngleX(cameraAngleX);
    mouseX = 0;
    mouseY = 0;
    window.requestAnimationFrame(step);
  }
  step();
}

function updatePosition(e: MouseEvent) {
  mouseX += e.movementX * mouseSensitivity;
  mouseY += e.movementY * mouseSensitivity;
}
