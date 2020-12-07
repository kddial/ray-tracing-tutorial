// @ts-nocheck
import { useEffect, useRef } from 'react';
import { canvasMain } from './canvas-main';
import { GPU } from 'gpu.js';

// Configuration
export const WIDTH = 256;
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current != null) {
      const canvas = canvasRef.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function kernalFunction() {
        this.color(Math.random(), Math.random(), Math.random());
      }

      const kernal = new GPU({
        mode: 'gpu',
        canvas: canvasRef.current,
      })
        .createKernel(kernalFunction)
        .setGraphical(true)
        .setOutput([WIDTH, HEIGHT]);
      kernal();
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
