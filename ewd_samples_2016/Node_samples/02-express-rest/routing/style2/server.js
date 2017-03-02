'use strict';

var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();

//configure the app to pase JSON in input
app.use(bodyParser.json());

//create routing object
require('./api/dogs/index')(app);

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");