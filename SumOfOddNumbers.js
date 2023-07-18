

function rowSumOddNumbers(n){
    let j = 1
    let result = 0
    for(let i=0; i<n; i++){
       result +=  (n * (n-1))+j
       j += 2
    }
    return result
}


function method1(n){
    return Math.pow(n,3)
}

function method2(n){
    const out = Array.from( {length: n*(n+1)/2}, (_,i) => i * 2 + 1 );
  return out.slice( out.length - n ).reduce((a, b) => a + b, 0)
}

function method3(n){
    return Array.from({length: n*(n+1)/2}, (_, i) => i*2+1).slice(-n).reduce((a, b)=> a + b, 0)
}

console.log(method1(42))
console.log(rowSumOddNumbers(42))
console.log(method2(42))
console.log(method3(42))

