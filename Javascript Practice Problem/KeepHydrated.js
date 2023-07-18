function litres(time){
return Math.floor(parseInt(time/1)*0.5+time%1*0.5)
}

function method1(time){
    return Math.floor(time*0.5)
}


function method2(time){
    return ~~(time/2)
}

function method3(time){
    return time>>1
}

console.log(method3(11.5))