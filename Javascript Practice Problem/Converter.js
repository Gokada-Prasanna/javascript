function converterBinarytoDecimal(number){
return parseInt(number, 2)
}

function converterDecimaltoBinary(number){
    return number.toString(2)
}

let number = 1010
console.log(converterBinarytoDecimal(number))
let number1 = 10
console.log(converterDecimaltoBinary(number1))