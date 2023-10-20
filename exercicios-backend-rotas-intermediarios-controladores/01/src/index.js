const express = require('express')
const { soma, subtracao, multiplicacao, divisao } = require('./controladores')

const app = express()

app.get('/somar', soma)

app.get('/subtrair', subtracao)

app.get('/multiplicar', multiplicacao)

app.get('/dividir', divisao)

app.listen(8000)