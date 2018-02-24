
// Modules
const express       = require('express');
const bodyParser    = require('body-parser');
const matrixCtrl    = require('../controller/matrixController');

// Router
const matrixRouter = express.Router();
matrixRouter.use(bodyParser.json());

// Routes
matrixRouter.route('/')
    .all((req, res, next) => {
        cors(res);

        next();
    })

    .get((req, res, next) => {
        res.end('<html><body><h1>Ready to control LED matrix!</h1></body></html>');
    })

    .post((req, res, next) => {
        matrixCtrl.draw(req, res);
    })

    .options((req, res, next) => {
        res.end();
    });

matrixRouter.route('/point')
    .all((req, res, next) => {
        cors(res);

        next();
    })

    .post((req, res, next) => {
        matrixCtrl.drawPoint(req, res);
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

module.exports = matrixRouter;
