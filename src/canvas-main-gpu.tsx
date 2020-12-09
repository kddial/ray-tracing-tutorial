// @ts-nocheck
// TODO bring back typescript!

import { WIDTH, HEIGHT } from './app-main';
import { GPU } from 'gpu.js';
import vectorFunctions from './vector-functions';

export function canvasMainGpu(canvasRef) {
  const gpu = new GPU({
    mode: 'gpu',
    // mode: 'cpu', // cpu mode to allow debuggin inside kernal
    canvas: canvasRef,
  });

  vectorFunctions.forEach((vecFuncDefinition) => {
    gpu.addFunction(...vecFuncDefinition);
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
      focalLength: 2,
    },
  });

  // Cannot set arugmentTypes on kernal function when graphical is set to true
  // So spread out the vector values.
  const cameraOrigin = [0, 0, 0];
  kernal(cameraOrigin[0], cameraOrigin[1], cameraOrigin[2]);
  // to debug output
  // window.kernalFn = kernal.toString(args);
}

function kernalFunction(cameraOriginX, cameraOriginY, cameraOriginZ) {
  // camera
  const cameraOrigin = [cameraOriginX, cameraOriginY, cameraOriginZ];
  const cameraHorizontal = [this.constants.viewportWidth, 0, 0];
  const cameraVertical = [0, this.constants.viewportHeight, 0];
  let lowerLeftCorner = vecSubtract(
    cameraOrigin,
    vecDivideNum(cameraHorizontal, 2),
  );
  lowerLeftCorner = vecSubtract(
    lowerLeftCorner,
    vecDivideNum(cameraVertical, 2),
  );
  lowerLeftCorner = vecSubtract(lowerLeftCorner, [
    0,
    0,
    this.constants.focalLength,
  ]);

  // rays
  // TODO

  let blue = 0.6;
  if (vecEquals([0, 0, 3], [0, 0, 1]) === 1) {
    blue = 0;
  }
  // if (vecAdd([0, 0, 3], [0, 0, 3])[2] === 6) {
  //   blue = 0;
  // }

  this.color(
    this.thread.x / this.constants.canvasWidth,
    this.thread.y / this.constants.canvasHeight,
    blue,
  );
}
