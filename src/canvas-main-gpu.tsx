// @ts-nocheck

import { WIDTH, HEIGHT } from './app-main';
import { GPU } from 'gpu.js';
import vectorFunctions from './vector-functions';
import rayFunctions from './ray-functions';

export function canvasMainGpu(canvasRef) {
  const gpu = new GPU({
    mode: 'gpu',
    // mode: 'cpu', // debug in cpu mode
    canvas: canvasRef,
  });

  vectorFunctions.forEach((vecFuncDefinition) => {
    gpu.addFunction(...vecFuncDefinition);
  });
  rayFunctions.forEach((rayFunc) => {
    gpu.addFunction(rayFunc);
  });

  const kernal = gpu.createKernel(kernalFunction, {
    output: [WIDTH, HEIGHT],
    graphical: true,
  });

  const cameraOrigin = [0, 0, 0];
  let cameraAngle = 90; // in degrees

  // window.kernalFn = kernal.toString(cameraOrigin, cameraAngle); // to debug output in GPU mode

  console.log(`Should aim for 16ms.`);
  function step() {
    const startTime = Date.now();
    kernal(cameraOrigin, cameraAngle);
    const endTime = Date.now();
    console.log(`Done in ${endTime - startTime} ms. [GPU.JS]`);

    cameraAngle = (cameraAngle + 0.5) % 180;
    window.requestAnimationFrame(step);
  }
  step();
}

function kernalFunction(cameraOriginRaw, cameraAngle) {
  // constants
  const PI = 3.1415926535897932385;

  // canvas
  const canvasWidth = 256;
  const canvasHeight = 256;

  // camera
  const viewportHeight = 2;
  const viewportWidth = 2;
  const focalLength = 2;

  // camera
  const cameraOrigin = [
    cameraOriginRaw[0],
    cameraOriginRaw[1],
    cameraOriginRaw[2],
  ];
  const cRadians = (cameraAngle * PI) / 180;
  const cameraDirection = [Math.cos(cRadians), 0, Math.sin(cRadians)];

  // x,y,x => u,v,w
  const vup = [0, 1, 0]; // vector up in the y-axis
  const w = vecUnit(cameraDirection);
  const u = vecCross(vup, w);
  const v = vecCross(w, u);

  const cameraHorizontal = vecMultiplyNum(u, viewportWidth);
  const cameraVertical = vecMultiplyNum(v, viewportHeight);
  let lowerLeftCameraOrigin = vecSubtract(
    cameraOrigin,
    vecDivideNum(cameraHorizontal, 2),
  );
  lowerLeftCameraOrigin = vecSubtract(
    lowerLeftCameraOrigin,
    vecDivideNum(cameraVertical, 2),
  );
  const lowerLeftCameraPlane = vecSubtract(
    lowerLeftCameraOrigin,
    vecMultiplyNum(w, focalLength),
  );

  // rays
  const i = this.thread.x;
  const j = this.thread.y;

  const s = vecMultiplyNum(cameraHorizontal, i / (canvasWidth - 1));
  const t = vecMultiplyNum(cameraVertical, j / (canvasHeight - 1));

  const rayDirection = vecSubtract(
    vecAdd(vecAdd(lowerLeftCameraPlane, s), t),
    cameraOrigin,
  );

  const canvasColor = rayColor(cameraOrigin, rayDirection);

  this.color(canvasColor[0], canvasColor[1], canvasColor[2]);
}
