function Method1(pin){
return /^(\d{4}|\d{6})$/.test(pin)
}

function Method2(pin){
    return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}

let pin = '123456'

console.log(Method1(pin))
console.log(Method2(pin))