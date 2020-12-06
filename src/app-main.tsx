import { useEffect, useRef } from 'react';
import { draw } from './draw';

export default function AppMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Configuration
    const WIDTH = 256;
    const HEIGHT = 256;

    if (canvasRef.current != null) {
      // Set up the canvas with a 2D rendering context
      const canvas = canvasRef.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const context = canvas.getContext('2d');
      if (context) {
        context.imageSmoothingEnabled = false;

        draw(context);
      }
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
