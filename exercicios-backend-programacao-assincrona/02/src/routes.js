const express = require('express')
const { listOfPokemons, returnInfoPokemon } = require('./controllers/pokemon-controller')

const route = express()

route.get('/pokemon', listOfPokemons)
route.get('/pokemon/:idPokemon', returnInfoPokemon)

module.exports = route