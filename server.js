var express = require('express');
var app = express();


app.use(express.static(__dirname));

var route = require('./routes.js');

app.listen(3000);

app.use(route);
console.log('Server started at localhost:3000');