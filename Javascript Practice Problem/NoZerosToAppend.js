function Method1(arr){
    
    let nonZeroes = arr.filter(item => item!==0)
    let zeroes = arr.filter(item => item === 0)

    return nonZeroes.concat(zeroes)
}

function Method2(arr){
 return   (arr.filter(item => item!==0)).concat(arr.filter(item => item === 0))
    
}

let arr = [1,2, +0, 0, 1, +0, 3,4,0]
console.log(Method1(arr))
