'use strict'

var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var api = require('./routes/FavoritoRoute');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//con esta funsion podemos utilizar el api-rest correctamente cuando implementemos angular 2 para no tener errores co
//con los metodos put y delete 
app.use( (req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
});

app.use('/', api);

module.exports = app;