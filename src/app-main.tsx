// @ts-nocheck
import { useEffect, useRef } from 'react';
import { setup, step } from './step';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const kernal = setup(canvas);
      step(kernal);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas1" ref={canvasRef1}></canvas>
      <div className="game-info"></div>
    </div>
  );
}
