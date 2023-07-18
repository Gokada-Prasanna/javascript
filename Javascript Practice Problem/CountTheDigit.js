function nbDig(n,d){
return Array.from({length: n+1}, (_,i) => i*i).reduce((a,b) => a+(b.toString().split("").filter(i => i===d.toString()).length),0)
}

function method1(n,d){
    return Array.from({length:n+1}, (_,i) => i*i).join("").match(new RegExp(d, "g")).length
}

function method2(n,d){
    let arr = Array.from({length: n+1}, (_,i)=>i*i).join("")
    return arr.length - (arr.replace(new RegExp(d, "g"), "").length)


}


console.log(method2(5750, 0))
