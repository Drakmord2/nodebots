
const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const servoRouter   = require('./routes/servoRouter');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/servo', servoRouter);
app.use(express.static( __dirname+'/public'));

module.exports = app;
