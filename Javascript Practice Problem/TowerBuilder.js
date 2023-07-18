function towerBuilder(nFloors){
    let result = []
for(let i=1;i<=nFloors;i++){
    let row = " ".repeat(nFloors-i)+"*".repeat(2*i-1)+" ".repeat(nFloors-i)
    result.push(row)
}
return result
}

function method1(nFloors){
    return [...Array(nFloors)].map((_,i) => " ".repeat(nFloors-1-i)+"*".repeat(i*2+1)+" ".repeat(nFloors-1-i))
}

console.log(method1(5))