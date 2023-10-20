const fs = require('fs/promises')
const { buscarEndereco } = require('utils-playground')

async function addressManipulation(req, res) {
    const { cep } = req.params

    try {
        const address = await buscarEndereco(cep)

        const adressesArray = await fs.readFile('./src/enderecos.json')//para ler um arquivo vc passa o caminho dele

        const addressParse = JSON.parse(adressesArray)//array//transforma json em obj js

        const encontrarEndereco = addressParse.find((objetoAtual) => {
            return objetoAtual.cep === address.cep//string com string
        })
        //!Primeiro buscar o endereço pra ver se existe ele no enderecos.JSON

        if (encontrarEndereco) {
            return res.status(400).send('Endereço já existente.')
        }
        //!Se nao existir continua

        addressParse.push(address)

        //aq transforma em json de novo para sobrescrever em cima do arquivo ja existente
        await fs.writeFile('./src/enderecos.json', JSON.stringify(addressParse))

        return res.status(201).send('Endereço adicionado.')

    } catch (erro) {
        console.log(erro)
        return res.send('ERRO')
    }

}

module.exports = addressManipulation