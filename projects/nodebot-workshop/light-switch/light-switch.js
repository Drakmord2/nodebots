
const {Board, Button, Led}  = require('johnny-five');
const board                 = new Board();

board.on('ready', start);

function start () {
    const BTN_PIN = 5;
    const LED_PIN = 9;

    const led = new Led(LED_PIN);
    const btn = new Button(BTN_PIN);

    btn.on('press', () => {
        led.toggle();
    });
}
