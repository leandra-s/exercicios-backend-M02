const express = require('express')
const { listarProdutos, obterProduto, calcularFrete } = require('./controllers/product-controller')

const routes = express()

routes.get('/produtos', listarProdutos)//ver a lista
routes.get('/produtos/:idProduto', obterProduto)//obter produto especifico
routes.get('/produtos/:idProduto/frete/:cep', calcularFrete)//comprar um especifico calculando o frete

module.exports = routes