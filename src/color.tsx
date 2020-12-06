import Vector from './vector';
import { drawPixel } from './draw';

export default class Color extends Vector {
  draw(context: CanvasRenderingContext2D, x: number, y: number) {
    drawPixel(context, x, y, this.x, this.y, this.z);
  }
}
