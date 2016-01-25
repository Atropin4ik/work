var express = require('express');
var app = express();
var lessMiddleware = require( 'express-less-middleware' )();

app.use(lessMiddleware);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:page', function (req, res) {
  res.render(req.params.page, {});
});

app.get('/:page', function (req, res) {
  res.render(req.params.page, {});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});