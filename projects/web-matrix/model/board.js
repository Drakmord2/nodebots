
const j5Board   = require('johnny-five');
let ready       = false;

class Board {

    constructor () {
        if (! Board.instance) {
            this._boardCtrl = null;

            this.setup();

            Board.instance = this;
        }

        return Board.instance;
    }

    setup() {
        if (this._boardCtrl !== null) {
            return;
        }

        const board = new j5Board.Board({
            repl:   false,
            debug:  false
        });

        this._boardCtrl = board;
        board.on('ready', this.onReady);
    }

    onReady () {
        ready = true;

        this.matrix = new j5Board.Led.Matrix({
            pins: {
                data:   8,
                cs:     9,
                clock:  10
            },
            devices: 1
        });
    }

    isReady () {
        return ready;
    }

    getBoard () {
        while (! this.isReady()) {
            console.log('Waiting for board...');
        }

        return this._boardCtrl;
    }

}

const instance = new Board();
Object.freeze(instance);

module.exports = instance;
