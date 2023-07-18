function doubleChar(str){
return str.replace(/(.)/g, "$1$1")
}

function method1(str){
    return str.replace(/(.)/g, "$1$1")
}


function method2(str){
    return str.replace(/./g, "$&$&")
}

let str = "String!"
console.log(method2(str))