var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var port = 3000;
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json()); // Parses json, multi-part (file), url-encoded

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.join(__dirname, 'client')));

// set our first route
app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(port, function () {
  console.log('Web server listening on port ' + port);
});
