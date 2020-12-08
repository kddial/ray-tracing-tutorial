// @ts-nocheck
// TODO bring back typescript!

import { WIDTH, HEIGHT } from './app-main';
import { GPU } from 'gpu.js';
import vectorFunctions from './vector-functions';

export function canvasMainGpu(canvasRef) {
  const gpu = new GPU({
    mode: 'gpu',
    canvas: canvasRef,
    functions: vectorFunctions,
  });
  const kernal = gpu
    .createKernel(kernalFunction)
    .setGraphical(true)
    .setOutput([WIDTH, HEIGHT]);

  kernal(WIDTH, HEIGHT);
  // to debug output
  // window.kernalFn = kernal.toString(WIDTH, HEIGHT, [0.3]);
}

function kernalFunction(canvas_width, canvas_height) {
  let blue = 0;
  if (vecLength([0, 0, 3]) === 3) {
    blue = 0.3;
  }

  this.color(this.thread.x / canvas_width, this.thread.y / canvas_height, blue);
}
