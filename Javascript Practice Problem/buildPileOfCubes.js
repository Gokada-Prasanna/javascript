function findNb(m){
let no_of_piles = 1
let sum = 0 
while(sum <= m){
    sum += no_of_piles ** 3 
    if(sum === m){
        return no_of_piles
    }
    no_of_piles += 1
}
return -1
}

function method1(m){
    var n = 0
    while(m>0) m -= ++n**3 
    return m ? -1: n
}

let m = 1071225
console.log(findNb(m))