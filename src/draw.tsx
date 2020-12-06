function drawPixelRaw(
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

export function drawPixel(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number, // 0 to 255
  g: number, // 0 to 255
  b: number, // 0 to 255
) {
  drawPixelRaw(context, x, y, r * 255, g * 255, b * 255, 1.0);
}
