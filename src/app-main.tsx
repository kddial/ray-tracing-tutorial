// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { setup, step } from './step';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [cameraAngleX, setCameraAngleX] = useState(null);
  const [cameraAngleY, setCameraAngleY] = useState(null);
  const [uiCameraOrigin, setUICameraOrigin] = useState([0, 0, 0]);

  useEffect(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const kernal = setup(canvas, setIsLocked);
      step(kernal, setCameraAngleX, setCameraAngleY, setUICameraOrigin);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas
        id="canvas1"
        ref={canvasRef1}
        style={{ border: isLocked ? 'none' : '3px solid yellow' }}
      ></canvas>
      <div className="game-info">
        <p>isLocked: {isLocked ? 'true' : 'false'}</p>
        <p>cameraAngleX: {cameraAngleX}</p>
        <p>cameraAngleY: {cameraAngleY}</p>
        <p>
          Camera Origin: {uiCameraOrigin[0]}, {uiCameraOrigin[1]},{' '}
          {uiCameraOrigin[2]}
        </p>
      </div>
    </div>
  );
}
