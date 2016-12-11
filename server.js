'use strict'
require('dotenv').config({ silent: true })
const express = require('express');
const logger  = require('morgan');
const bodyParser =  require('body-parser');
const path = require('path');
const app  = express();
const PORT = process.argv[2] || process.env.port || 3000;


app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.listen(PORT, () => console.log('Jawnz sold at', `${PORT}`));
