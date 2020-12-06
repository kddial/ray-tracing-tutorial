import Vector from './vector';

class Ray {
  origin: Vector;
  direction: Vector;

  constructor(origin: Vector, direction: Vector) {
    this.origin = origin;
    this.direction = direction;
  }

  at(t: number) {
    return this.direction.multiply(t).add(this.origin);
  }
}
