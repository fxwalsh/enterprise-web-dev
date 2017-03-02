var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 

app.get('/', function (req, res) {
  res.format({
  'text/plain': function(){
    res.send('hey');
  },

  'text/html': function(){
    res.send('<p>hey</p>');
  },

  'application/json': function(){
    res.send({ message: 'hey' });
  },

  'default': function() {
    // log the request and respond with 406
    res.status(406).send('Not Acceptable');
  }
});
})

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");