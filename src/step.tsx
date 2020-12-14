import { canvasMainGpu } from './canvas-main-gpu';

export function setup(canvas: HTMLCanvasElement) {
  // mouse lock
  canvas.onclick = () => {
    canvas.requestPointerLock();
  };

  function lockChangeAlert() {
    if (document.pointerLockElement === canvas) {
      console.log('locked');
      // document.addEventListener('mousemove', updatePosition, false);
    } else {
      console.log('unlocked');
      // document.removeEventListener('mousemove', updatePosition, false);
    }
  }
  document.addEventListener('pointerlockchange', lockChangeAlert, false);

  const kernal = canvasMainGpu(canvas);
  return kernal;
}

export function step(kernal: any) {
  const cameraOrigin = [0, 0, 0];
  let cameraAngle = 90; // in degrees

  function step() {
    kernal(cameraOrigin, cameraAngle);
    cameraAngle += 1;
    window.requestAnimationFrame(step);
  }
  step();
}
