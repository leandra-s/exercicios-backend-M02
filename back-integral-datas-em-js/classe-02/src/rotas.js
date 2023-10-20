const express = require('express')
const organizarRegistro = require('./controladores/controle')

const rotas = express()

rotas.get('/organizar', organizarRegistro)

module.exports = rotas