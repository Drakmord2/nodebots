
const { Servo } = require('johnny-five');
const Board     = require('../model/board');

function start (board, position) {

    const TIME      = 1000;
    const SERVO_PIN = 9;
    const servo     = new Servo(SERVO_PIN);

    board.wait(TIME, () => {
        servo.to(position);

        board.wait(TIME, () => {
            servo.stop();

            console.log(`- servo at ${position} degrees`);
        });
    });

}

function move(req, res) {

    const j5board   = Board.getBoard();
    const position  = getPosition(req);

    if (position < 0 || position > 180) {
        res.statusCode = 400;
        res.end('<h4>Invalid position. Servos move from 0 to 180 degrees.</h4>');
        return;
    }

    start(j5board, position);

    res.end(`<h4>Servo moving to ${position} degrees.</h4>`);
}

function getPosition (req) {
    if (req.method === 'GET') {
        return req.params.servoPos
    }

    if (req.method === 'POST') {
        return req.body.servoPos
    }
}

module.exports = {
    move
};