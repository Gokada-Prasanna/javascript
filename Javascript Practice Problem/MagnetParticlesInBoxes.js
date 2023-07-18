function doubles(maxk, maxn){
    let result = 0
for(let i=1;i<maxn+1;i++){
    let denominator = maxk*Math.pow((i+1), 2*maxk)
result += 1/denominator
}
return result
}

let maxk = 1
let maxn = 3 
console.log(doubles(maxk, maxn))