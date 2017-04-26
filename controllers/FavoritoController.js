'use strict'

var Favorito = require('../models/FavoritoModel');


function getFavorito(req, res) {


	var FavoritoId = req.params.id;
	res.status(200).send({data: FavoritoId});
}

function getFavoritos(req, res) {
	Favorito.find({}).sort('-_id').exec((err, favoritos)=>{
		if (err) {
			res.status(500).send({msj: "error al devolver los marcador"});
		}

		if (!favoritos) {
			res.status(404).send({msj: "no hay marcadores guardados"});
		}

		res.status(200).send({favoritos});
	});
}
function saveFavorito(req, res) {
	var favorito = new Favorito();
	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored)=>{
		if (err) {
			res.status(500).send({msj: "error al guardar el marcador"});
		}
		res.status(200).send({favorito : favoritoStored});
	});
}
function updateFavorito(req, res) {
	var params = req.body;
	res.status(200).send({params})
}
function deleteFavorito(req, res) {
	var params = req.body;
	res.status(200).send({params})
}
/*
function getFavorito(req, res) {
	// body...
}
*/
module.exports = {
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
};