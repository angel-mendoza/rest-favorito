'use strict'

var Favorito = require('../models/FavoritoModel');

//trae un objeto haciendo la busqueda con el id
function getFavorito(req, res) {
	var FavoritoId = req.params.id;
	Favorito.findById(FavoritoId, (err, favorito)=>{
		if (err) {
			res.status(500).send({msj: "error al devolver los marcador"});
		}

		if (!favorito) {
			res.status(404).send({msj: "no hay marcadores guardados"});
		}

		res.status(200).send({favorito});
	});
	
}
//muestra todo los objetos q estan en el archivo de base de datos
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
//guarda en la base de datos
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
	var FavoritoId = req.params.id;
	var update = req.body;

	Favorito.findByIdAndUpdate(FavoritoId, update, (err, favvoritoUpdate)=>{
		if (err) {
			res.status(500).send({msj: "error al actualizar el marcador"});
		}
		res.status(200).send({favorito : favvoritoUpdate});
	});
	
}
function deleteFavorito(req, res) {
	var FavoritoId = req.params.id;
	Favorito.findById(FavoritoId, (err, favorito)=>{
		if (err) {
			res.status(500).send({msj: "error al devolver los marcador"});
		}

		if (!favorito) {
			res.status(404).send({msj: "no hay marcadores guardados"});
		}else{
			favorito.remove(err =>{
				if (err) {
					res.status(500).send({msj: "el marcador no se a borrado"});
				}else{
					res.status(200).send({msj : "el marcador a sido eliminado!!"})
				}
			});
		}
	});
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