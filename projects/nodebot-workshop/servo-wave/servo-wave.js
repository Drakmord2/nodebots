
const {Board, Servo}    = require('johnny-five');
const board             = new Board();

board.on('ready', start);

function start () {
    const range     = [0, 180];
    const TIME      = 3000;
    const SERVO_PIN = 9;
    const servo     = new Servo(SERVO_PIN);

    servo.sweep(range);

    board.wait(TIME, () => {
        servo.stop();
        servo.center();
    });
}
