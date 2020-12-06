export function draw(context: CanvasRenderingContext2D) {
  drawPixel(context, 0, 0, 255, 0, 0, 1.0);
  drawPixel(context, 1, 0, 0, 255, 0, 1.0);
  drawPixel(context, 2, 0, 0, 0, 255, 1.0);
  drawPixel(context, 3, 0, 255, 255, 0, 1.0);
  drawPixel(context, 3, 0, 255, 255, 255, 1.0);
  drawPixel(context, 4, 0, 255, 255, 255, 1.0);

  drawPixel(context, 255, 255, 255, 255, 255, 1.0);
}

function drawPixel(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number, // 0 to 255
  g: number, // 0 to 255
  b: number, // 0 to 255
  a: number, // 0.0 to 1.0
) {
  context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  context.fillRect(x, y, 1, 1);
}
