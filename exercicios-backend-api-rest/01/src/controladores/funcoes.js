let { dadosDosAlunos } = require('../dados/alunos')

const listarAlunos = (req, res) => {
    return res.status(200).json(dadosDosAlunos)
}

const obterAluno = (req, res) => {
    const { idAluno } = req.params//string

    //falta validar se o numero do id é valido

    const alunoEncontrado = dadosDosAlunos.find((aluno) => {
        return aluno.id === Number(idAluno)
    })


    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
    }

    return res.status(200).json(alunoEncontrado)
}

let controladorAlunos = 1
const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: 'Propriedade nome inexistente.' })
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'Propriedade sobrenome inexistente.' })
    }

    if (!idade) {
        return res.status(400).json({ mensagem: 'Propriedade idade inexistente.' })
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'Propriedade curso inexistente.' })
    }

    if ((nome === '' || nome === ' ') || (sobrenome === '' || sobrenome === ' ') || (curso === '' || curso === ' ')) {
        return res.status(400).json({ mensagem: 'Propriedade inválida, sem conteúdo.' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Idade inválida, menor de 18 anos.' })
    }

    let cadastrar = {
        id: controladorAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    }

    dadosDosAlunos.push(cadastrar)

    return res.status(201).json()
}

const deletarAluno = (req, res) => {
    const { idAluno } = req.params

    //id valido ou nao

    const alunoEncontrado = dadosDosAlunos.find((aluno) => {
        return aluno.id === Number(idAluno)
    })

    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Alunos não encontrado.' })
    }

    dadosDosAlunos = dadosDosAlunos.filter((aluno) => {
        return aluno.id !== Number(idAluno)
    })


    return res.status(200).json(alunoEncontrado)
}

module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    deletarAluno
}