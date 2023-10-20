const express = require('express')
const { vezDoJogador, removerJogador, adicionarJogadorEIndice } = require('./controladores')


const app = express()

app.get('/', vezDoJogador)

app.get('/remover', removerJogador)

app.get('/adicionar', adicionarJogadorEIndice)

app.listen(8000)