// @ts-nocheck

// can refer for hitSphere or hitTriangle
// https://github.com/evanw/lightgl.js/blob/master/src/raytracer.js

export function rayAt(
  rayOrigin: number[],
  rayDirection: number[],
  t: number,
): number[] {
  return vecAdd(vecMultiplyNum(rayDirection, t), rayOrigin);
}

export function hitSphere(
  rayOrigin: number[],
  rayDirection: number[],
  sphereCenter: number[],
  radius: number,
): number {
  const offsetCenter = vecSubtract(rayOrigin, sphereCenter);
  const a = vecLengthSquared(rayDirection);
  const halfB = vecDot(offsetCenter, rayDirection);
  const c = vecLengthSquared(offsetCenter) - radius * radius;
  const discriminant = halfB * halfB - a * c;

  if (discriminant < 0) {
    return -1;
  } else {
    return (-halfB - Math.sqrt(discriminant)) / a;
  }
}

export function hitPlane(
  rayOrigin: number[],
  rayDirection: number[],
  planeCenter: number[],
  planeNormal: number[],
  planeRadius: number,
): number {
  const denominator = vecDot(planeNormal, rayDirection);
  if (denominator < 0.00000001 && denominator > -0.00000001) {
    return -1;
  } else {
    const numerator = vecDot(vecSubtract(planeCenter, rayOrigin), planeNormal);
    const t = numerator / denominator;
    const point = vecAdd(vecMultiplyNum(rayDirection, t), rayOrigin);
    const distCenter = vecSubtract(point, planeCenter);

    if (vecDot(distCenter, distCenter) <= planeRadius * planeRadius) {
      return t;
    } else {
      return -1;
    }
  }
}

// boxMin is the lower left corner of box
// boxMax is the upper right corner of box
// Source: https://gamedev.stackexchange.com/questions/18436/most-efficient-aabb-vs-ray-collision-algorithms
// Answer: https://gamedev.stackexchange.com/a/150467
// Diagram: https://gamedev.stackexchange.com/a/39903
export function hitBox(
  rayOrigin: number[],
  rayDirection: number[],
  boxMin: number[],
  boxMax: number[],
): number {
  // x = 0;
  // y = 1;
  // z = 2;
  let t = -1;
  const t1 = (boxMin[0] - rayOrigin[0]) / rayDirection[0];
  const t2 = (boxMax[0] - rayOrigin[0]) / rayDirection[0];

  const t3 = (boxMin[1] - rayOrigin[1]) / rayDirection[1];
  const t4 = (boxMax[1] - rayOrigin[1]) / rayDirection[1];

  const t5 = (boxMin[2] - rayOrigin[2]) / rayDirection[2];
  const t6 = (boxMax[2] - rayOrigin[2]) / rayDirection[2];

  const tmin = Math.max(
    Math.max(Math.min(t1, t2), Math.min(t3, t4)),
    Math.min(t5, t6),
  );
  const tmax = Math.min(
    Math.min(Math.max(t1, t2), Math.max(t3, t4)),
    Math.max(t5, t6),
  );

  // if tmax < 0, ray is intersecting AABB, but the whole AABB is behind us
  if (tmax < 0) {
    t = tmax;
    return -1;
  }

  // if tmin > tmax, ray doesn't intersect AABB
  if (tmin > tmax) {
    t = tmax;
    return -1;
  }

  // if tmin < 0 then the ray origin is inside of the AABB and tmin is behind the start of the ray so tmax is the first intersection
  if (tmin < 0) {
    t = tmax;
  } else {
    t = tmin;
  }
  return t;
}

export function raySkyColor(rayDirection: number[]): number[] {
  const unit_direction = vecUnit(rayDirection);
  const t = 0.5 * (unit_direction[1] + 1);
  const color1 = vecMultiplyNum([1, 1, 1], 1 - t);
  const color2 = vecMultiplyNum([0.5, 0.7, 1.0], t);
  return vecAdd(color1, color2);
}

export function rayColor(
  rayOrigin: number[],
  rayDirection: number[],
  sphereT: number,
  sphereCenter: number[],
  planeT: number,
  planeCenter: number[],
  boxT: number,
  boxMin: number[],
): number[] {
  const LARGE_NUM = 999999999;
  let nearestT = LARGE_NUM;
  let nearestEntityOrigin = [0, 0, 0];

  if (sphereT === LARGE_NUM && planeT === LARGE_NUM && boxT === LARGE_NUM) {
    return raySkyColor(rayDirection);
  }

  nearestT = Math.min(Math.min(sphereT, planeT), boxT);

  if (nearestT === sphereT) {
    nearestT = sphereT;
    nearestEntityOrigin = sphereCenter;
  } else if (nearestT === planeT) {
    nearestT = planeT;
    nearestEntityOrigin = planeCenter;
  } else if (nearestT === boxT) {
    nearestT = boxT;
    nearestEntityOrigin = boxMin;
  }

  const normal = vecUnit(
    vecSubtract(rayAt(rayOrigin, rayDirection, nearestT), nearestEntityOrigin),
  );
  return vecMultiplyNum(vecAddNum(normal, 1), 0.5);
}

export const rayFunctions = [
  rayAt,
  hitSphere,
  raySkyColor,
  rayColor,
  hitPlane,
  hitBox,
];
export default rayFunctions;
