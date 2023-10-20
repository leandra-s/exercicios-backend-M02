const produtos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground')

async function listarProdutos(req, res) {
    return res.json(produtos)
}

async function obterProduto(req, res) {
    const { idProduto } = req.params

    const encontrarProduto = produtos.find((produto) => {
        return produto.id === Number(idProduto)
    })

    return res.json(encontrarProduto)

}

async function calcularFrete(req, res) {
    const { idProduto, cep } = req.params
    let calculoFrete

    try {
        const encontrarCep = await getStateFromZipcode(cep)// o await aguarda para que essa promessa seja resolvida e depois passa para outra //encontra o cep

        const encontrarProduto = produtos.find((produto) => {//acha o id
            return produto.id === Number(idProduto)
        })

        if (!encontrarProduto) {
            return res.status(404).json('Produto não encontrado.')
        }

        if ((encontrarCep === 'BA') || (encontrarCep === 'SE') || (encontrarCep === 'AL') || (encontrarCep === 'PE') || (encontrarCep === 'PB')) {
            calcularFrete = (encontrarProduto.valor * 10) / 100

            return res.json({
                encontrarProduto,
                "estado": encontrarCep,
                "frete": calcularFrete
            })
        }

        if (encontrarCep === 'SP' || encontrarCep === 'RJ') {
            calcularFrete = (encontrarProduto.valor * 15) / 100

            return res.json({
                encontrarProduto,
                "estado": encontrarCep,
                "frete": calcularFrete
            })
        }


        calcularFrete = (encontrarProduto.valor * 12) / 100

        return res.status(200).json({
            encontrarProduto,
            "estado": encontrarCep,
            "frete": calcularFrete
        })
    } catch (erro) {
        return res.status(500).json('Erro no servidor.')
    }

}

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFrete
}