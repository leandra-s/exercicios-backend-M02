const {getDay, getHours, getSeconds} = require('date-fns')


function horarioFuncionalLoja (data){

    const hora = data.getHours()
    const diaDaSemana = data.getDay()
    const segundos = data.getSeconds()

    if(hora > 8 && (hora <= 18 && segundos === 0) && diaDaSemana !== 0 && diaDaSemana !== 6){
        return true
    } else{
        return false
    }
}

console.log(horarioFuncionalLoja(new Date(2021,3,26,7,59)))