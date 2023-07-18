function find(arr){
return arr.filter(item => /(;|:)(-|~)?(\)|D)/.test(item) === true).length
}

function method2(arr){
    return arr.filter(item => /^[;:][-~]?[)D]$/.test(item)).length
}

function method3(arr){
    return arr.reduce((a,b) => a+/^[;:][-~]?[)D]$/.test(b), 0)
}
let arr = [':)', ';(', ';}', ':-D']
console.log(method3(arr))