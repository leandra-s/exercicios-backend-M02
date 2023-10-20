const { imoveis } = require('../dados/imoveis')

const get = (req, res) => {
    res.send(imoveis)
}

const getPorId = (req, res) => {
    const { id } = req.params //parametro de rota
    const encontrarId = imoveis.find((imovelAtual) => {
        return imovelAtual.id === Number(id)//o id é um string, passar p/number
    })
    res.send(encontrarId)
}

module.exports = {
    get,
    getPorId
}