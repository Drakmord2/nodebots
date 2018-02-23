
const { Led } = require('johnny-five');
const Board   = require('../model/board');

function start (board, image) {
    const matrix = new Led.Matrix({
        pins: {
            data:   8,
            cs:     9,
            clock:  10
        },
        devices: 1
    });

    board.wait(1000, () => {
        matrix.draw(image);
    });
}

function draw(req, res) {

    const j5board   = Board.getBoard();
    const image     = req.body.matrix;

    if (image.length !== 8) {
        res.statusCode = 400;
        res.end('<h4>Invalid image. The dimension should be 8x8.</h4>');
        return;
    }

    start(j5board, image);

    res.end(`<h4>Drawing image.</h4>`);
}

module.exports = {
    draw
};
