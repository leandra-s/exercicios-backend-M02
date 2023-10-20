const express = require('express')//importando bibliototeca

const servidor = express()
let minuto = 0
let segundo = 0
let rodando = false
let armazenar//undefined


function iniciarCronometro() {
    rodando = true
    if (!armazenar) {
        armazenar = setInterval(() => {
            if (segundo === 59) {
                segundo = 0;
                minuto++;
            } else {
                segundo++;
            }

        }, 1000)
    }

}

servidor.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minuto.toString().padStart(2, '0')} minutos e ${segundo.toString().padStart(2, '0')} segundos`)
})

servidor.get('/iniciar', (req, res) => {
    iniciarCronometro()
    res.send('Cronômetro iniciado!')
})

servidor.get('/pausar', (req, res) => {
    clearInterval(armazenar)
    armazenar = undefined
    res.send('Cronômetro pausado!')
})

servidor.get('/continuar', (req, res) => {
    iniciarCronometro()
    res.send('Cronômetro continuando!')
})

servidor.get('/zerar', (req, res) => {
    clearInterval(armazenar)
    armazenar = undefined
    minuto = 0
    segundo = 0
    res.send('Cronômetro zerado!')
})

servidor.listen(8000)




