
// Modules
const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const matrixRouter  = require('./routes/matrixRouter');

// Application
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( __dirname+'/public'));

// Routes
app.use('/matrix', matrixRouter);

module.exports = app;
