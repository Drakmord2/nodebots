
const {Board, Motor}    = require('johnny-five');
const board             = new Board();

board.on('ready', start);

function start () {
    const MOTOR_SPD = 200;
    const MOTOR_PIN = 9;

    const motor = new Motor(MOTOR_PIN);

    motor.start(MOTOR_SPD);

    board.wait(2000, () => {
        motor.stop();

        board.wait(1000, () => {
            motor.start(MOTOR_SPD);
        })
    });

}
