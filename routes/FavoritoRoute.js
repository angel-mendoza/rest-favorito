'use strict'
var express = require('express');
var favorito_controller = require('../controllers/FavoritoController');
var api = express.Router();


api.get('/favorito/:id', favorito_controller.getFavorito);
api.post('/favoritos/', favorito_controller.saveFavorito);
api.put('/favorito/:id', favorito_controller.updateFavorito);
api.delete('/favorito/:id', favorito_controller.deleteFavorito);
api.get('/favoritos', favorito_controller.getFavoritos);

module.exports = api;