import Vector from './vector';
import { drawPixel } from './draw';

export default class Color extends Vector {
  draw(context: CanvasRenderingContext2D, x: number, y: number) {
    drawPixel(context, x, y, this.x, this.y, this.z);
  }

  // TODO: [TypeScript] Make class Vector handle case where it returns the same type as the argument.
  add(v: Color | number): Color {
    if (v instanceof Color)
      return new Color(this.x + v.x, this.y + v.y, this.z + v.z);
    else return new Color(this.x + v, this.y + v, this.z + v);
  }

  // TODO: [TypeScript] Make class Vector handle case where it returns the same type as the argument.
  multiply(v: Color | number): Color {
    if (v instanceof Color)
      return new Color(this.x * v.x, this.y * v.y, this.z * v.z);
    else return new Color(this.x * v, this.y * v, this.z * v);
  }
}
