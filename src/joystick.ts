// @ts-nocheck
import nipplejs from 'nipplejs';

export let joystickCamera;
export let joystickMovement;

export function joystickSetup() {
  joystickCamera = nipplejs.create({
    zone: document.getElementById('joystick-camera'),
    color: 'blue',
  });

  joystickMovement = nipplejs.create({
    zone: document.getElementById('joystick-movement'),
    color: 'red',
  });
}
