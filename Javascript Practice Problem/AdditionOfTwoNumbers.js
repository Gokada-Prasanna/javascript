function sumStr(a,b){
    return (a*1+b*1).toString()
}


function method1(a,b){
return ((+a+ +b)+"")
}


function method2(a,b){
    return (Number(a)+Number(b)).toString()
}

function method3(a,b){
    return (parseInt(a)||0 + parseInt(b)||0).toString()
}

console.log(method2("", 8))