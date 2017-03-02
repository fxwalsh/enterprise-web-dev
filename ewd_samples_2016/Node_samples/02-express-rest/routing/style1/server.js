'use strict';

var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();

//create routing object
var dogs =require('./api/dogs/index');

//configure the app to pase JSON in input
app.use(bodyParser.json());

//Add routes for dogs api
app.get('/dogs',dogs.listAllDogs);

app.post('/dogs',dogs.addDog);

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");