let { livros } = require('../banco-de-dados/dados-livros')

const listagemDeLivros = (req, res) => {
    return res.json(livros)
}

const obterLivro = (req, res) => {
    const { id } = req.params

    const buscarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    //validar que seja um numero

    if (!buscarLivro) {
        return res.json({ mensagem: "Não existe livro para o ID informado." })
    }

    return res.json(buscarLivro)
}

let controladorIDLivro = (livros[livros.length - 1].id + 1)
const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    const livroAdicionado = {
        id: controladorIDLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livroAdicionado)
    return res.json(livroAdicionado)
}

const substituirLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const buscarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!buscarLivro) {
        return res.json({ mensagem: "Não existe livro a ser substituído para o ID informado." })
    }

    buscarLivro.titulo = titulo
    buscarLivro.autor = autor
    buscarLivro.ano = ano
    buscarLivro.numPaginas = numPaginas

    return res.json({ mensagem: "Livro substituído." })
}

const alterarUmLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const buscarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!buscarLivro) {
        return res.json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if(titulo){
        buscarLivro.titulo = titulo
    }

    if(autor){
        buscarLivro.autor = autor
    }

    if(ano){
        buscarLivro.ano = ano
    }

    if(numPaginas){
        buscarLivro.numPaginas = numPaginas
    }
    
    return res.json({ mensagem: "Livro alterado." })

}

const removerLivro = (req, res) => {
    const { id } = req.params

    const buscarLivro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!buscarLivro) {
        return res.json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id)
    })

    return res.json({ mensagem: "Livro removido." })

}

module.exports = {
    listagemDeLivros,
    obterLivro,
    adicionarLivro,
    substituirLivro,
    alterarUmLivro,
    removerLivro
}