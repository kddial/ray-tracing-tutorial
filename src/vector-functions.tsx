// Inspo: https://github.com/evanw/lightgl.js/blob/master/src/vector.js

export function vecNegative(vec: number[]): number[] {
  return [-vec[0], -vec[1], -vec[2]];
}

export function vecAdd(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
}

export function vecAddNum(vec1: number[], num: number): number[] {
  return [vec1[0] + num, vec1[1] + num, vec1[2] + num];
}

export function vecSubtract(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] - vec2[0], vec1[1] - vec2[1], vec1[2] - vec2[2]];
}

export function vecSubtractNum(vec1: number[], num: number): number[] {
  return [vec1[0] - num, vec1[1] - num, vec1[2] - num];
}

export function vecMultiply(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] * vec2[0], vec1[1] * vec2[1], vec1[2] * vec2[2]];
}

export function vecMultiplyNum(vec1: number[], num: number): number[] {
  return [vec1[0] * num, vec1[1] * num, vec1[2] * num];
}

export function vecDivide(vec1: number[], vec2: number[]): number[] {
  return [vec1[0] / vec2[0], vec1[1] / vec2[1], vec1[2] / vec2[2]];
}

export function vecDivideNum(vec1: number[], num: number): number[] {
  return [vec1[0] / num, vec1[1] / num, vec1[2] / num];
}

export function vecEquals(vec1: number[], vec2: number[]): number {
  return vec1[0] === vec2[0] && vec1[1] === vec2[1] && vec1[2] === vec2[2]
    ? 1
    : 0;
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
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  return Math.sqrt(dot);
}

export function vecLengthSquared(vec: number[]): number {
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  return dot;
}

export function vecUnit(vec: number[]): number[] {
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  let length = Math.sqrt(dot);
  if (length === 0) {
    length = 1;
  }
  return [vec[0] / length, vec[1] / length, vec[2] / length];
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

const returnTypeArray3 = (func: any) => {
  return [func, { returnType: 'Array(3)' }];
};

const createFuncDefinition = (
  func: any,
  argumentTypes: any,
  returnType: string,
) => {
  return [func, { argumentTypes, returnType: returnType }];
};

const returnTypeNumber = (func: any) => {
  return [func, { returnType: 'Number' }];
};

const vectorFunctions = [
  returnTypeArray3(vecNegative),
  returnTypeArray3(vecAdd),
  returnTypeArray3(vecAddNum),
  createFuncDefinition(
    vecSubtract,
    { vec1: 'Array(3)', vec2: 'Array(3)' },
    'Array(3)',
  ),

  returnTypeArray3(vecSubtractNum),
  returnTypeArray3(vecMultiply),
  returnTypeArray3(vecMultiplyNum),
  returnTypeArray3(vecDivide),
  createFuncDefinition(
    vecDivideNum,
    { vec1: 'Array(3)', num: 'Number' },
    'Array(3)',
  ),
  returnTypeNumber(vecEquals),
  createFuncDefinition(
    vecDot,
    { vec1: 'Array(3)', vec2: 'Array(3)' },
    'Number',
  ),

  returnTypeArray3(vecCross),
  createFuncDefinition(vecLength, { vec: 'Array(3)' }, 'Number'),
  createFuncDefinition(vecLengthSquared, { vec: 'Array(3)' }, 'Number'),

  createFuncDefinition(vecUnit, { vec: 'Array(3)' }, 'Array(3)'),
  returnTypeNumber(vecMin),
  returnTypeNumber(vecMax),
];

export default vectorFunctions;
