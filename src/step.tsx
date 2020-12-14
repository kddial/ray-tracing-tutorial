import { canvasMainGpu } from './canvas-main-gpu';

const mouseSensitivity = 0.5;
let mouseX = 0;
let cameraAngle = 90; // in degrees

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

export function step(kernal: any, setCameraAngle: (value: number) => void) {
  const cameraOrigin = [0, 0, 0];

  function step() {
    kernal(cameraOrigin, cameraAngle);
    cameraAngle = (cameraAngle + mouseX) % 360;
    setCameraAngle(cameraAngle);
    mouseX = 0;
    window.requestAnimationFrame(step);
  }
  step();
}

function updatePosition(e: MouseEvent) {
  mouseX += e.movementX * mouseSensitivity;
}
