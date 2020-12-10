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
  const a = vecDot(rayDirection, rayDirection);
  const b = vecDot(offsetCenter, rayDirection) * 2;
  const c = vecDot(offsetCenter, offsetCenter) - radius * radius;
  const discriminant = b * b - 4 * a * c;
  return discriminant > 0 ? 1 : 0;
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
): number[] {
  const sphereCenter = [0, 0, -2];
  const sphereRadius = 0.5;

  if (hitSphere(rayOrigin, rayDirection, sphereCenter, sphereRadius) === 1) {
    return [1, 0, 0];
  }

  return raySkyColor(rayDirection);
}

export const rayFunctions = [rayAt, hitSphere, raySkyColor, rayColor];
export default rayFunctions;
