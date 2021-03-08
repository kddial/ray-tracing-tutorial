// @ts-nocheck
import nipplejs from 'nipplejs';

export let joystickMovement;
export let joystickCamera;

export function joystickSetup() {
  joystickMovement = nipplejs.create({
    zone: document.getElementById('joystick-movement'),
    color: 'blue',
  });

  joystickCamera = nipplejs.create({
    zone: document.getElementById('joystick-camera'),
    color: 'green',
  });
}
