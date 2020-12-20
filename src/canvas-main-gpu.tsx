// @ts-nocheck

import { WIDTH, HEIGHT } from './app-main';
import { GPU } from 'gpu.js';
import vectorFunctions from './vector-functions';
import rayFunctions from './ray-functions';

export function canvasMainGpu(canvasRef) {
  const gpu = new GPU({
    mode: 'gpu',
    // mode: 'cpu', // debug in cpu mode
    canvas: canvasRef,
  });

  vectorFunctions.forEach((vecFuncDefinition) => {
    gpu.addFunction(...vecFuncDefinition);
  });
  rayFunctions.forEach((rayFunc) => {
    gpu.addFunction(rayFunc);
  });

  const kernal = gpu.createKernel(kernalFunction, {
    output: [WIDTH, HEIGHT],
    graphical: true,
  });

  return kernal;
}

function kernalFunction(
  cameraOriginRaw,
  cameraAngleX,
  cameraAngleY,
  sphereEntities,
  numSphereEntities,
) {
  // constants
  const PI = 3.1415926535897932385;

  // canvas
  const canvasWidth = 256;
  const canvasHeight = 256;

  // camera
  const viewportHeight = 2;
  const viewportWidth = 2;
  const focalLength = 2;

  // camera
  const cameraOrigin = [
    cameraOriginRaw[0],
    cameraOriginRaw[1],
    cameraOriginRaw[2],
  ];
  const cRadiansX = (cameraAngleX * PI) / 180;
  const cRadiansY = (cameraAngleY * PI) / 180;
  const cameraDirection = [
    Math.cos(cRadiansX),
    Math.sin(cRadiansY),
    Math.sin(cRadiansX),
  ];

  // x,y,x => u,v,w
  const vup = [0, 1, 0]; // vector up in the y-axis
  const w = vecUnit(cameraDirection);
  const u = vecCross(vup, w);
  const v = vecCross(w, u);

  const cameraHorizontal = vecMultiplyNum(u, viewportWidth);
  const cameraVertical = vecMultiplyNum(v, viewportHeight);
  let lowerLeftCameraOrigin = vecSubtract(
    cameraOrigin,
    vecDivideNum(cameraHorizontal, 2),
  );
  lowerLeftCameraOrigin = vecSubtract(
    lowerLeftCameraOrigin,
    vecDivideNum(cameraVertical, 2),
  );
  const lowerLeftCameraPlane = vecSubtract(
    lowerLeftCameraOrigin,
    vecMultiplyNum(w, focalLength),
  );

  // rays
  const i = this.thread.x;
  const j = this.thread.y;

  const s = vecMultiplyNum(cameraHorizontal, i / (canvasWidth - 1));
  const t = vecMultiplyNum(cameraVertical, j / (canvasHeight - 1));

  const rayDirection = vecSubtract(
    vecAdd(vecAdd(lowerLeftCameraPlane, s), t),
    cameraOrigin,
  );

  // cycle through sphere entities
  let nearestSphereT = -1;
  let nearestSphereCenter = [0, 0, 0];
  for (let ii = 0; ii < numSphereEntities; ii++) {
    const sphereRadius = sphereEntities[ii][0];
    const sphereCenter = [
      sphereEntities[ii][1],
      sphereEntities[ii][2],
      sphereEntities[ii][3],
    ];
    const t = hitSphere(cameraOrigin, rayDirection, sphereCenter, sphereRadius);
    if (t > 0) {
      if (
        nearestSphereT === -1 ||
        (nearestSphereT !== -1 && t < nearestSphereT)
      ) {
        nearestSphereT = t;
        nearestSphereCenter = sphereCenter;
      }
    }
  }

  const canvasColor = rayColor(
    cameraOrigin,
    rayDirection,
    nearestSphereT,
    nearestSphereCenter,
  );
  this.color(canvasColor[0], canvasColor[1], canvasColor[2]);
}
