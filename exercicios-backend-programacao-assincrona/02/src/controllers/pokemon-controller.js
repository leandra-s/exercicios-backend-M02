const { listarPokemons, detalharPokemon } = require('utils-playground')

async function listOfPokemons(req, res) {
    const paginaPokemon = await listarPokemons()

    return res.send(paginaPokemon.results)
}

async function returnInfoPokemon(req, res) {
    const { idPokemon } = req.params
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

}

module.exports = {
    listOfPokemons,
    returnInfoPokemon
}