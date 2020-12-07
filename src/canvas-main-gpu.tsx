// @ts-nocheck
import { WIDTH, HEIGHT } from './app-main';
import { GPU } from 'gpu.js';

export function canvasMainGpu(canvasRef) {
  const kernal = new GPU({
    mode: 'gpu',
    canvas: canvasRef,
  })
    .createKernel(kernalFunction)
    .setGraphical(true)
    .setOutput([WIDTH, HEIGHT]);
  return kernal;
}

function kernalFunction() {
  this.color(Math.random(), Math.random(), Math.random());
}
