let num = 98;

function Method1(num) {
    if(num < 0){
    return (false)
}
else if(num === 0){
    return (true)
}
else{
    if(((Math.sqrt(num)).toString()).indexOf('.') === -1){
        return (true)
    }
    return (false)
}
}


function Method2(num){
return (Number.isInteger(Math.sqrt(num)))
}

function Method3(num){
    return Math.sqrt(num)%1 === 0
}

// function Method4(num){
//     num = Math.sqrt(num)

//     return ~~num === num
// }

function Method5(num){
    let n = Math.floor(Math.sqrt(num))
return (num === n)

}


function Method6(num){
    return (num === 0? ( true) : (num > 0 && Math.sqrt(num)%1===0))
}

console.log(Method6(num))