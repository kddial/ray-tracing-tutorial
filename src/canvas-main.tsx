import Color from './color';
import { WIDTH, HEIGHT } from './app-main';

export function canvasMain(context: CanvasRenderingContext2D) {
  for (let j = 0; j < HEIGHT; j++) {
    console.log('Scanlines remaining', HEIGHT - j);

    for (let i = 0; i < WIDTH; i++) {
      const temp_color = new Color(i / (WIDTH - 1), j / (HEIGHT - 1), 0.25);
      temp_color.draw(context, i, j);
    }
  }
  console.log('Done.');

  const color1 = new Color(1, 1, 1);
  color1.draw(context, 100, 100);
}
