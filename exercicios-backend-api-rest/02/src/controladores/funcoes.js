let { convidados } = require('../bancodedados/dados-convidados')

const listaDeConvidados = (req, res) => {
    const { nome } = req.query

    if (nome) {
        const acharConvidado = convidados.find((convidado) => {
            return convidado === nome
        })

        if (!acharConvidado) {
            return res.json({ mensagem: "O convidado buscado não está presente na lista." })
        }

        return res.json({ mensagem: "Convidado presente." })
    }

    return res.json(convidados)
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body//string

    const encontrarConvidado = convidados.find((convidado) => {
        return convidado === nome
    })

    if (encontrarConvidado) {
        return res.json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }



    convidados.push(nome)

    return res.json({ "mensagem": "Convidado adicionado." })

}

const deletarConvidado = (req, res) => {
    const { nome } = req.params

    const encontrarConvidado = convidados.find((convidado) => {
        return convidado === nome
    })

    if (!encontrarConvidado) {
        return res.json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== nome
    })

    return res.json({ "mensagem": "Convidado removido." })
}

module.exports = {
    listaDeConvidados,
    adicionarConvidado,
    deletarConvidado
}