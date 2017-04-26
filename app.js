'use strict'

var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var api = require('./routes/FavoritoRoute');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', api);

module.exports = app;