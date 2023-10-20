const fs = require('fs/promises')


async function organizarRegistro(req, res) {

    try {
        const pessoas = await fs.readFile('./src/pessoas.json')

        let arrayPessoas = JSON.parse(pessoas)

        const organizarArray = arrayPessoas.sort((pessoa1, pessoa2) => {
            return (new Date(pessoa1.registered)) - (new Date(pessoa2.registered))
        })

        arrayPessoas = organizarArray
        console.log(JSON.stringify(arrayPessoas))

        await fs.writeFile('./src/pessoas.json', JSON.stringify(arrayPessoas))


        return res.status(201).json('Tudo organizado.')

    } catch (erro) {
        return res.status(400).json('ERRO')

    }
}

module.exports = organizarRegistro