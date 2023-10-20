const { listarPokemons, detalharPokemon } = require('utils-playground')

async function listOfPokemons(req, res) {
    try {
        const paginaPokemon = await listarPokemons()

        return res.send(paginaPokemon.results)
    } catch (erro) {
        return res.status(500).send('Erro.')
    }

}

async function returnInfoPokemon(req, res) {
    const { idPokemon } = req.params

    try {
        const infoPokemon = await detalharPokemon(idPokemon)

        const { id, name, height, weight, base_experience, forms, abilities, species } = infoPokemon

        res.send({
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        })
    } catch (erro) {
        return res.status(500).send('Erro.')
    }

}

module.exports = {
    listOfPokemons,
    returnInfoPokemon
}