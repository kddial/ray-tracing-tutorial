// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { setup, step } from './step';
import { shouldShowDebugInfo } from './url-params';

// Configuration
export const WIDTH = 256; // should match in kernalFunction
export const HEIGHT = 256;

export default function AppMain() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [uiCameraAngleX, setUICameraAngleX] = useState(null);
  const [uiCameraAngleY, setUICameraAngleY] = useState(null);
  const [uiCameraOrigin, setUICameraOrigin] = useState([0, 0, 0]);
  const [mouseSensitivity, setMouseSensitivity] = useState(null);

  const setMouseSensitivityUi = (value) => {
    if (value <= 0.05) {
      setMouseSensitivity(0.05);
    } else {
      setMouseSensitivity(value);
    }
  };

  useEffect(() => {
    window.mouseSensitivity = mouseSensitivity;
  }, [mouseSensitivity]);

  useEffect(() => {
    // init into global window space
    setMouseSensitivity(0.2);

    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      const kernal = setup(canvas, setIsLocked);
      step(kernal, setUICameraAngleX, setUICameraAngleY, setUICameraOrigin);
    }
  }, []);

  return (
    <div className="app-container">
      <div className="canvas-container">
        <div className="game-info">
          <div>
            <p
              style={{
                display: 'inline-block',
                paddingRight: 10,
                minWidth: 170,
              }}
            >
              Mouse Sensitivity: {roundTwoDec(mouseSensitivity)}
            </p>
            <button
              onClick={() => {
                setMouseSensitivityUi(mouseSensitivity - 0.05);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setMouseSensitivityUi(mouseSensitivity + 0.05);
              }}
            >
              +
            </button>
          </div>
          {shouldShowDebugInfo() && (
            <React.Fragment>
              <p>Camera AngleX: {roundTwoDec(uiCameraAngleX)}</p>
              <p>Camera AngleY: {roundTwoDec(uiCameraAngleY)}</p>
              <p>Camera Origin: {stringifyVectors(uiCameraOrigin)}</p>
            </React.Fragment>
          )}
        </div>
        <canvas
          id="canvas1"
          ref={canvasRef1}
          style={{ border: isLocked ? 'none' : '3px solid yellow' }}
        ></canvas>
      </div>
      {window.isMobile && (
        <div className="joystick-container">
          <div id="joystick-movement" className="joystick-zone" />
          <div id="joystick-camera" className="joystick-zone" />
        </div>
      )}
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
