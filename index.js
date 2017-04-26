'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/cursoFavorito', (err, res)=>{
	if (err) {
		throw err;
	}else{
		app.listen(3000, function() {
			console.log("todo bien");
		});
	}
});

