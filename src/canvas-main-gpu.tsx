// @ts-nocheck
// TODO bring back typescript!

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
    constants: {
      canvasWidth: WIDTH,
      canvasHeight: HEIGHT,
      // camera
      viewportHeight: 2,
      viewportWidth: 2,
      focalLength: 1,
    },
  });

  const cameraOrigin = [0, 0, 0];

  console.log(`Should aim for 16ms.`);
  function step() {
    cameraOrigin[2] += 0.1;

    const startTime = Date.now();
    kernal(cameraOrigin);
    // window.kernalFn = kernal.toString(args);   // to debug output
    const endTime = Date.now();
    console.log(`Done in ${endTime - startTime} ms. [GPU.JS]`);

    // window.requestAnimationFrame(step);
  }
  step();
}

function kernalFunction(cameraOriginRaw) {
  const { canvasWidth, canvasHeight } = this.constants;
  // const canvasWidth = 256; // debug in cpu mode
  // const canvasHeight = 256; // debug in cpu mode

  const viewportHeight = 2;
  const viewportWidth = 2;
  const focalLength = 1;

  // camera
  const cameraOrigin = [
    cameraOriginRaw[0],
    cameraOriginRaw[1],
    cameraOriginRaw[2],
  ];
  const cameraHorizontal = [viewportWidth, 0, 0];
  const cameraVertical = [0, viewportHeight, 0];
  let lowerLeftCorner = vecSubtract(
    cameraOrigin,
    vecDivideNum(cameraHorizontal, 2),
  );
  lowerLeftCorner = vecSubtract(
    lowerLeftCorner,
    vecDivideNum(cameraVertical, 2),
  );
  lowerLeftCorner = vecSubtract(lowerLeftCorner, [0, 0, focalLength]);

  // rays
  const i = this.thread.x;
  const j = this.thread.y;

  const u = vecMultiplyNum(cameraHorizontal, i / (canvasWidth - 1));
  const v = vecMultiplyNum(cameraVertical, j / (canvasHeight - 1));

  const rayDirection = vecSubtract(
    vecAdd(vecAdd(lowerLeftCorner, u), v),
    cameraOrigin,
  );
  const skyColor = raySkyColor(rayDirection);

  this.color(skyColor[0], skyColor[1], skyColor[2]);
}
