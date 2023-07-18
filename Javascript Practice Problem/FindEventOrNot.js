function testEvent(n){
    return n%2===0
}

function method1(n){
    return !(n%2) // ! turn any value into boolean value
}

console.log(testEvent(5))
console.log(method1(6))