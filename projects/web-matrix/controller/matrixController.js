
const Board = require('../model/board');

function draw(req, res) {
    const j5Board   = Board.getBoard();
    const image     = req.body.matrix;

    if (image.length !== 8) {
        res.statusCode = 400;
        res.end('<h4>Invalid image. The dimension should be 8x8.</h4>');
        return;
    }

    j5Board.matrix.draw(image);

    res.end(`<h4>Drawing image.</h4>`);
}

function drawPoint(req, res) {
    const j5Board   = Board.getBoard();
    const point     = req.body.point;

    j5Board.matrix.led(0, point.i, point.j, point.state);

    res.end(`<h4>Drawing image.</h4>`);
}

module.exports = {
    draw,
    drawPoint
};
