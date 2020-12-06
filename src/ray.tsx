import Vector from './vector';
import Color from './color';

export default class Ray {
  origin: Vector;
  direction: Vector;

  constructor(origin: Vector, direction: Vector) {
    this.origin = origin;
    this.direction = direction;
  }

  at(t: number) {
    return this.direction.multiply(t).add(this.origin);
  }

  color(): Color {
    const unit_direction = this.direction.unit();
    const t = 0.5 * (unit_direction.y + 1);
    const color1 = new Color(1, 1, 1).multiply(1 - t);
    const color2 = new Color(0.5, 0.7, 1.0).multiply(t);
    return color1.add(color2);
  }
}
