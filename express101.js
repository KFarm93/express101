var express = require('express');
var myApp = express();

myApp.use(express.static('public'));

myApp.set('view engine', 'hbs');

myApp.get('/', function (req, res) {
  res.send('Hello, world!');
});

myApp.get('/name/:name/age/:age', function(req, res) {
  var today = new Date();
  var year = today.getFullYear();
  var yearBorn = year - req.params.age;
  var name = req.params.name;
  res.render('hello.hbs', {
    title: 'Hiya',
    name: name,
    yearBorn: yearBorn
  });
});

myApp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
