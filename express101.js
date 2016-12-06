var express = require('express');
var myApp = express();

myApp.set('view engine', 'hbs');

myApp.get('/', function (req, res) {
  res.send('Hello, world!');
});

myApp.get('/year', function(req, res) {
  var today = new Date();
  var year = today.getFullYear();
  var yearBorn = year - req.query.age;
  res.send('You were born in ' + yearBorn);
});

myApp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
