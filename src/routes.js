const express = require('express');

const routes = express.Router(); 

const Product = require('./app/controllers/Produto')


// GET: BUSCAR INFORMAÇÃO
// POST: CRIAR INFORMAÇÃO
// PUT: ALTERAR INFORMAÇÃO
// DELETE: DELETAR INFORMAÇÃO

routes.get('/', Product.Get);
routes.post('/', Product.Post);
routes.put('/', Product.Update);
routes.delete('/', Product.Delete);


module.exports = routes;