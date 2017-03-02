var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

// Configure the app to serve up content from public directory
app.use(express.static('public'));

require('./api/customers/index')(app);

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");