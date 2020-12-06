import { useEffect, useRef } from 'react';
import { canvasMain } from './canvas-main';

// Configuration
export const WIDTH = 256;
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current != null) {
      // Set up the canvas with a 2D rendering context
      const canvas = canvasRef.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const context = canvas.getContext('2d');
      if (context) {
        context.imageSmoothingEnabled = false;

        canvasMain(context);
      }
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
