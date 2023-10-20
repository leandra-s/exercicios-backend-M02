const soma = (req, res) => {
    const { num1, num2 } = req.query
    const somar = Number(num1) + Number(num2)
    res.send(`${somar}`)
}

const subtracao = (req, res) => {
    const { num1, num2 } = req.query
    const subtrair = Number(num1) - Number(num2)
    res.send(`${subtrair}`)
}

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query
    const multiplicar = Number(num1) * Number(num2)
    res.send(`${multiplicar}`)
}

const divisao = (req, res) => {
    const { num1, num2 } = req.query
    const dividir = Number(num1) / Number(num2)
    res.send(`${dividir}`)
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}