function century(y){
return parseInt(y/100)+1
}

function method1(y){
    return Math.ceil(y/100)
}


function method2(y){
    return (y+99)/100|0
}
let year = 1900
console.log(method2(year))