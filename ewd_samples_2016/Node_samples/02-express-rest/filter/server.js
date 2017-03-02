var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 

//Catch-all
app.all('/app(/*)?',  function(req, res, next) {
  if(req.session && req.session.userName) {
    next();
  } else {
    res.redirect('/login?redir=' + req.url);
  }
});

//public
app.get('/public', function (req, res) {
    res.send("This is always accessable");
});

//public
app.get('/login', function (req, res) {
    res.send("This is where you log in");
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");