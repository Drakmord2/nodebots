
const {Board, Led}  = require('johnny-five');
const board         = new Board();

board.on('ready', () => {
    const PIN       = 13;
    const ONE_SEC   = 1000;

    const led = new Led(PIN);

    led.strobe(ONE_SEC);
});
