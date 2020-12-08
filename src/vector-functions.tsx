// Inspo: https://github.com/evanw/lightgl.js/blob/master/src/vector.js

export function vecNegative(vec: number[]): number[] {
  return [-vec[0], -vec[1], -vec[2]];
}

export function vecAdd(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
}

export function vecSubtract(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] - vec2[0], vec1[1] - vec2[1], vec1[2] - vec2[2]];
}

export function vecMultiply(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] * vec2[0], vec1[1] * vec2[1], vec1[2] * vec2[2]];
}

export function vecDivide(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] / vec2[0], vec1[1] / vec2[1], vec1[2] / vec2[2]];
}

export function vecDivideNum(vec1: number[], num: number): number[] {
  return [vec1[0] / num, vec1[1] / num, vec1[2] / num];
}

export function vecEquals(vec1: number[], vec2: number[]): boolean {
  return vec1[0] === vec2[0] && vec1[1] === vec2[1] && vec1[2] === vec2[2];
}

export function vecDot(vec1: number[], vec2: number[]): number {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}

export function vecCross(vec1: number[], vec2: number[]): number[] {
  const x = 0;
  const y = 1;
  const z = 2;
  return [
    vec1[y] * vec2[z] - vec1[z] * vec2[y],
    vec1[z] * vec2[x] - vec1[x] * vec2[z],
    vec1[x] * vec2[y] - vec1[y] * vec2[x],
  ];
}

export function vecLength(vec: number[]): number {
  return Math.sqrt(vecDot(vec, vec));
}

export function vecUnit(vec: number[]): number[] {
  return vecDivideNum(vec, vecLength(vec));
}

export function vecMin(vec: number[]): number {
  return Math.min(Math.min(vec[0], vec[1]), vec[2]);
}

export function vecMax(vec: number[]): number {
  return Math.max(Math.max(vec[0], vec[1]), vec[2]);
}

// export function vecToAngles() {
//   return {
//     theta: Math.atan2(this.z, this.x),
//     phi: Math.asin(this.y / this.length()),
//   };
// }

// export function vecAngleTo(a: Vector) {
//   return Math.acos(this.dot(a) / (this.length() * a.length()));
// }

const vectorFunctions = [
  vecNegative,
  vecAdd,
  vecSubtract,
  vecMultiply,
  vecDivide,
  vecDivideNum,
  vecEquals,
  vecDot,
  vecCross,
  vecLength,
  vecUnit,
  vecMin,
  vecMax,
];
export default vectorFunctions;
