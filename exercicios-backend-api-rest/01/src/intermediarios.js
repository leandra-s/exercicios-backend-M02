const validacaoSenha = (req, res, next) => {
    const { senha } = req.query

    // if (toString(senha) === 'cubos123') {
    //     return next()
    // }

    if (!senha) {
        return res.status(401).json({ mensagem: 'Nenhuma senha foi informada.' })
    }

    if (senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'A senha está incorreta.' })
    }

    return next()
}

module.exports = {
    validacaoSenha
}
