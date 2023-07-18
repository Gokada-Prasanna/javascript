function greet(name) {
    return `Hello ${name} how are you?`
}

function method1(name){
    return "Hello <n> how are you?".replace(/\<(n)\>/, name)
}

function method2(name){
    return "Hello <n> how are you?".replace("<n>", name)
}

console.log(method1("Satya"))