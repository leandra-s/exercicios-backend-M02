const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogadores = 0


const removerJogador = (req, res) => {
    const { indice } = req.query

    if (!jogadores[Number(indice)]) {
        res.send(`Não existe jogador no índice informado (${Number(indice)}) para ser removido.`)
    } else {
        jogadores.splice(Number(indice), 1)
        res.send(jogadores)
    }
}

const vezDoJogador = (req, res) => {
    for (let nome of jogadores) {
        res.send(`É a vez de ${jogadores[indiceJogadores]} jogar!`)
        indiceJogadores++
        if (indiceJogadores === jogadores.length) {
            indiceJogadores = 0
        }
    }
}

const adicionarJogadorEIndice = (req, res) => {
    const { nome, indice } = req.query

    const arrayNome = nome.split('')
    let nomeAlterado = []
    nomeAlterado.push(arrayNome[0].toUpperCase())
    arrayNome.shift()
    nomeAlterado.push(arrayNome.join('').toLowerCase())
    nomeAlterado = nomeAlterado.join('')

    if (nome && indice) {
        if (indice > jogadores.length) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
        } else {
            jogadores.splice(indice, 0, nomeAlterado)
            res.send(jogadores)
        }
    } else {
        jogadores.push(nomeAlterado)
        res.send(jogadores)
    }
}

module.exports = {
    removerJogador,
    vezDoJogador,
    adicionarJogadorEIndice
}