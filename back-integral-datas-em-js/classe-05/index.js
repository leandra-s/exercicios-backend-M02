const { format, getHours, getDay, getSeconds } = require('date-fns')


function horarioFuncionalLoja(data) {

    const hora = data.getHours()
    const diaDaSemana = data.getDay()
    const segundos = data.getSeconds()


    if(diaDaSemana !== 0){
        
        if(diaDaSemana === 6 && hora > 8 && (hora <= 12 && segundos === 0)){
            return true
        }else if(hora > 8 && (hora <= 18 && segundos === 0)){
            return true
        } else{
            return false
        }

    } else {
        return false
    }

}

console.log(horarioFuncionalLoja(new Date(2021,3,24,9,30)))


