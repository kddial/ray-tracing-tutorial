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
  const [mouseSensitivity, setMouseSensitivity] = useState(0.2);

  const setMouseSensitivityGlobal = (value) => {
    setMouseSensitivity(value);
    window.mouseSensitivity = value;
  };

  useEffect(() => {
    // init into global window space
    setMouseSensitivityGlobal(mouseSensitivity);

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
        <div>
          <p style={{ display: 'inline', paddingRight: 10 }}>
            Mouse Sensitivity: {roundDec(mouseSensitivity, 1)}
          </p>
          <button
            onClick={() => {
              setMouseSensitivityGlobal(mouseSensitivity - 0.1);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setMouseSensitivityGlobal(mouseSensitivity + 0.1);
            }}
          >
            +
          </button>
        </div>
        <p>Canvas locked: {isLocked ? 'true' : 'false'}</p>
        <p>Camera AngleX: {roundTwoDec(uiCameraAngleX)}</p>
        <p>Camera AngleY: {roundTwoDec(uiCameraAngleY)}</p>
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
  return roundDec(floatNum, 2);
}

function roundDec(floatNum: number, decimalDigits: number) {
  return Math.round(floatNum * 10 ** decimalDigits) / 10 ** decimalDigits;
}
