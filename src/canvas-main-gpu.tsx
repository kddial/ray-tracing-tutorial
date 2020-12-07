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
  kernal(WIDTH, HEIGHT);
}

function kernalFunction(canvas_width, canvas_height) {
  this.color(this.thread.x / canvas_width, this.thread.y / canvas_height, 0.2);
}
