function nbYear(p0, percent, aug, p){
    let i = 0
while(p0<p){
    p0 = Math.floor(p0+p0*(percent/100)+aug)
    i += 1
}
return i
}

function method1(p0, percent, aug, p, years=0){
    if(p0<p){
        return method1(p0+Math.floor(p0*percent/100)+aug, percent, aug, p, ++years)
    }
    return years
}

console.log(method1(1500000, 0.25, 1000, 2000000))