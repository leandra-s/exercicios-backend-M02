const {getHours, getSeconds} = require('date-fns')


function horarioFuncionalLoja (data){

    const hora = data.getHours()
    const segundos = data.getSeconds()
    if(hora > 8 && (hora <= 18 && segundos === 0)){
        return true
    } else{
        return false
    }
}

console.log(horarioFuncionalLoja(new Date(2015,1,1,2)))
