const express = require('express')
const { listaDeConvidados, adicionarConvidado, deletarConvidado } = require('./controladores/funcoes')

const rotas = express()

rotas.get('/convidados', listaDeConvidados)//lista convidados e consulta de um convidado
rotas.post('/convidados', adicionarConvidado)
rotas.delete('/convidados/:nome', deletarConvidado)

module.exports = rotas