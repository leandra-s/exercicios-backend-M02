const express = require('express')
const { listagemDeLivros, obterLivro, adicionarLivro, substituirLivro, alterarUmLivro, removerLivro } = require('./controladores/funcoes')

const rotas = express()

rotas.get('/livros', listagemDeLivros)//consultar a coleção

rotas.get('/livros/:id', obterLivro)//consultar um livro através do ID

rotas.post('/livros', adicionarLivro)//adicionar um novo livro

rotas.put('/livros/:id', substituirLivro)//alterar um livro existente

rotas.patch('/livros/:id', alterarUmLivro)//alteraraçao especifica do livro

rotas.delete('/livros/:id', removerLivro)//remover livros


module.exports = rotas