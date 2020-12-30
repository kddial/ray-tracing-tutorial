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
): number {
  const radius = 20;

  const denominator = vecDot(planeNormal, rayDirection);
  if (denominator < 0.00000001 && denominator > -0.00000001) {
    return -1;
  } else {
    const numerator = vecDot(vecSubtract(planeCenter, rayOrigin), planeNormal);
    const t = numerator / denominator;
    const point = vecAdd(vecMultiplyNum(rayDirection, t), rayOrigin);
    const distCenter = vecSubtract(point, planeCenter);

    if (vecDot(distCenter, distCenter) <= radius * radius) {
      return t;
    } else {
      return -1;
    }
  }
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
): number[] {
  let nearestT = -1;
  let nearestCenter = [0, 0, 0];

  if (sphereT === -1 && planeT === -1) {
    return raySkyColor(rayDirection);
  } else if (sphereT !== -1 && planeT === -1) {
    nearestT = sphereT;
    nearestCenter = sphereCenter;
  } else if (sphereT === -1 && planeT !== -1) {
    nearestT = planeT;
    nearestCenter = planeCenter;
  } else if (sphereT > planeT) {
    nearestT = planeT;
    nearestCenter = planeCenter;
  } else if (sphereT <= planeT) {
    nearestT = sphereT;
    nearestCenter = sphereCenter;
  } else {
    // should never reach here
    return [1, 0, 0];
  }

  const normal = vecUnit(
    vecSubtract(rayAt(rayOrigin, rayDirection, nearestT), nearestCenter),
  );
  return vecMultiplyNum(vecAddNum(normal, 1), 0.5);
}

export const rayFunctions = [rayAt, hitSphere, raySkyColor, rayColor, hitPlane];
export default rayFunctions;
