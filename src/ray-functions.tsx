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
  const sphereCenter = [-10, 0, -4];
  const sphereRadius = 0.5;

  const t = hitSphere(rayOrigin, rayDirection, sphereCenter, sphereRadius);
  if (t > 0) {
    const normal = vecUnit(
      vecSubtract(rayAt(rayOrigin, rayDirection, t), sphereCenter),
    );
    return vecMultiplyNum(vecAddNum(normal, 1), 0.5);
  }

  return raySkyColor(rayDirection);
}

export const rayFunctions = [rayAt, hitSphere, raySkyColor, rayColor];
export default rayFunctions;
