// @ts-nocheck
import { useEffect, useRef } from 'react';
// import { canvasMain } from './canvas-main';
import { canvasMainGpu } from './canvas-main-gpu';

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
      canvasMainGpu(canvasRef.current);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
