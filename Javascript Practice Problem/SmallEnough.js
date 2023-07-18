function smallEnough(a, limit){
return a.every(i => i<=limit)
}

function method1(a, limit){
    return Math.max(...a) <= limit
}


function method2(a, limit){
    return a.filter(i => i<=limit).length > 0?true:false
}

console.log(smallEnough([1,2,3,5,6], 7))
console.log(method1([1,2,3,4,5,6,7], 5))
console.log(method2([1,2,3,4,5,6], 7))