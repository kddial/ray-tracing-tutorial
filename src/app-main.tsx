// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { setup, step } from './step';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [uiCameraAngleX, setUICameraAngleX] = useState(null);
  const [uiCameraAngleY, setUICameraAngleY] = useState(null);
  const [uiCameraOrigin, setUICameraOrigin] = useState([0, 0, 0]);

  useEffect(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const kernal = setup(canvas, setIsLocked);
      step(kernal, setUICameraAngleX, setUICameraAngleY, setUICameraOrigin);
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
        <p>Canvas locked: {isLocked ? 'true' : 'false'}</p>
        <p>Camera AngleX: {uiCameraAngleX}</p>
        <p>Camera AngleY: {uiCameraAngleY}</p>
        <p>Camera Origin: {stringifyVectors(uiCameraOrigin)}</p>
      </div>
    </div>
  );
}

function stringifyVectors(vec: number[]) {
  return `${roundTwoDec(vec[0])}, ${roundTwoDec(vec[1])}, ${roundTwoDec(
    vec[2],
  )}`;
}

function roundTwoDec(floatNum: number) {
  return Math.round(floatNum * 100) / 100;
}
