// can refer for hitSphere or hitTriangle
// https://github.com/evanw/lightgl.js/blob/master/src/raytracer.js

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
    // hardcode sphere object
    if (this.hitSphere(new Vector(0, 0, -2), 0.5)) {
      return new Color(1, 0, 0);
    }

    const unit_direction = this.direction.unit();
    const t = 0.5 * (unit_direction.y + 1);
    const color1 = new Color(1, 1, 1).multiply(1 - t);
    const color2 = new Color(0.5, 0.7, 1.0).multiply(t);
    return color1.add(color2);
  }

  hitSphere(sphereCenter: Vector, radius: number) {
    const offsetCenter = this.origin.subtract(sphereCenter);
    const a = this.direction.dot(this.direction);
    const b = offsetCenter.dot(this.direction) * 2;
    const c = offsetCenter.dot(offsetCenter) - radius * radius;
    const discriminant = b * b - 4 * a * c;
    return discriminant > 0;
  }
}
