const quarterOf = month => {
    return (month/3)%1 === 0 ? parseInt(month/3) : parseInt(month/3) + 1
}

function method1(month){
    return Math.ceil(month/3)
}

console.log(quarterOf(8))
console.log(method1(11))