function nameShuffler(str){
    str = str.split(" ")
    return str[1]+" "+str[0]
}

function method1(str){
    return str.split(" ").reverse().join(" ")
}

function method2(str){
    return str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`)
}

console.log(nameShuffler("john McClane"))
console.log(method1("john McClane"))
console.log(method2("john McClane"))

