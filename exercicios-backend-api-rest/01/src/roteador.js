const express = require('express')
let { listarAlunos, obterAluno, cadastrarAluno, deletarAluno } = require('./controladores/funcoes')

const rotas = express()

rotas.get('/alunos', listarAlunos)//retornar array completo
rotas.get('/alunos/:idAluno', obterAluno)//retornar um aluno em especifico

rotas.post('/alunos', cadastrarAluno)//cadastrar um aluno

rotas.delete('/alunos/:idAluno', deletarAluno)

module.exports = rotas
