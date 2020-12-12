// @ts-nocheck
import { useEffect, useRef } from 'react';
import { canvasMain } from './canvas-main';
import { canvasMainGpu } from './canvas-main-gpu';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvasMainGpu(canvasRef1.current);
    }

    if (canvasRef2.current != null) {
      const canvas = canvasRef2.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      const context = canvas.getContext('2d');
      canvasMain(context);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas1" ref={canvasRef1}></canvas>
      <canvas id="canvas2" ref={canvasRef2}></canvas>
    </div>
  );
}
