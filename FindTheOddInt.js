function findOdd(A){
    return A.find(i => A.filter(j => i===j).length%2 !== 0)
}

function method1(A){
    return A.reduce((a,b) => a^b)
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
console.log(method1([1,2,2,3,3,3,4,3,3,3,2,2,1]))
