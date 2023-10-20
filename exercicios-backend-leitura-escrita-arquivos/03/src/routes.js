const express = require("express")
const addressManipulation = require("./controllers/controller-cep")

const route = express()

route.get('/enderecos/:cep', addressManipulation)

module.exports = {
    route
}