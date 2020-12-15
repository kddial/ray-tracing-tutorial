export const keyPress: { [key: string]: number } = {};

function keyUpListener(event: KeyboardEvent) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = 0;
}

function keyDownListener(event: KeyboardEvent) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = Date.now();
}

window.addEventListener('keydown', keyDownListener, false);
window.addEventListener('keyup', keyUpListener, false);

export default keyPress;
