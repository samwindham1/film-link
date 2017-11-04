'use strict';

const express = require('express');
const app = express();
const path = require('path');
const opn = require('opn');

// send index
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// serve static files (css, js)
app.use('/static', express.static(path.join(__dirname, '../dist/static')));

var uri = 'http://localhost:3000';
console.log('Listening on 3000');
// when env is testing, don't need open it
if (process.env.NODE_ENV !== 'testing') {
  opn(uri);
}

var server = app.listen(3000);
