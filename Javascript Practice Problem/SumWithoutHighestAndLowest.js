function sumArray(array){
return array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a+b, 0)
}

function method1(array){
    return array ? array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a+b, 0): 0
}

let arr = [ 0, 1, 6, 10, 10 ]
console.log(method1(arr))