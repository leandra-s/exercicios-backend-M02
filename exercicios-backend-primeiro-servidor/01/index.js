const express = require('express')

const servidor = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let indiceJogadores = 0
servidor.get('/', (req, res) => {
    res.send(`E a vez de ${jogadores[indiceJogadores]} jogar!`)
    indiceJogadores++
    if (indiceJogadores === jogadores.length) {
        indiceJogadores = 0
    }

})

servidor.listen(3000)