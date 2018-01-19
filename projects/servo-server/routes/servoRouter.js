
// Modules
const express       = require('express');
const bodyParser    = require('body-parser');
const servoCtrl     = require('../controller/servoController');
const servoRouter   = express.Router();

servoRouter.use(bodyParser.json());

// Routes
servoRouter.route('/')

    .all((req, res, next) => {
        cors(res);

        next();
    })

    .get((req, res, next) => {
        res.end('<html><body><h1>Ready to control Servos!</h1></body></html>');
    })

    .post((req, res, next) => {
        servoCtrl.move(req, res);
    })

    .options((req, res, next) => {
        res.end();
    });

servoRouter.route('/:servoPos')
    .all((req, res, next) => {
        cors(res);

        next();
    })

    .get((req, res, next) => {
        servoCtrl.move(req, res);
    })

    .options((req, res, next) => {
        res.end();
    });

function cors(res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
}

module.exports = servoRouter;
