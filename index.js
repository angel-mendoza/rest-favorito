'use strict'

var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000, function() {
	console.log("todo bien");
});