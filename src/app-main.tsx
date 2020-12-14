// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { setup, step } from './step';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [cameraAngle, setCameraAngle] = useState(null);

  useEffect(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const kernal = setup(canvas, setIsLocked);
      step(kernal, setCameraAngle);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas id="canvas1" ref={canvasRef1}></canvas>
      <div className="game-info">
        <p>isLocked: {isLocked ? 'true' : 'false'}</p>
        <p>cameraAngle: {cameraAngle}</p>
      </div>
    </div>
  );
}
