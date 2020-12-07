import { WIDTH, HEIGHT } from './app-main';
import Vector from './vector';
import Ray from './ray';

export function canvasMain(context: CanvasRenderingContext2D) {
  // image
  const imageWidth = WIDTH;
  const imageHeight = HEIGHT;

  // camera
  const viewportHeight = 2;
  const viewportWidth = 2;
  const focalLength = 1;

  const origin = new Vector(0, 0, 0);
  const horizontal = new Vector(viewportWidth, 0, 0);
  const vertical = new Vector(0, viewportHeight, 0);

  const lowerLeftCorner = origin
    .subtract(horizontal.divide(2))
    .subtract(vertical.divide(2))
    .subtract(new Vector(0, 0, focalLength));

  const startTime = Date.now();
  for (let j = 0; j < HEIGHT; j++) {
    // html canvas (0,0) is in the top left corner.
    // but we want the (0,0) to be the bottom left corner, so we flip j value for plotting
    const jFlipped = HEIGHT - j;
    for (let i = 0; i < WIDTH; i++) {
      const u = i / (imageWidth - 1);
      const v = j / (imageHeight - 1);
      const ray = new Ray(
        origin,
        lowerLeftCorner
          .add(horizontal.multiply(u))
          .add(vertical.multiply(v))
          .subtract(origin),
      );
      ray.color().draw(context, i, jFlipped);
    }
  }
  const endTime = Date.now();
  console.log(`Done in ${endTime - startTime} ms.`);
  console.log(`Should aim for 16ms.`);
}
