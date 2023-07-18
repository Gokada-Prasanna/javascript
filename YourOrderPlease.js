function order(words){
    let result = words.split(" ")
    words.split(" ").map((i) => {
        result[(parseInt(i.split("").find(_ => (Number(_)===parseInt(_)))))-1] = i
        
    })
    return result.join(" ")
}


function method1(words){
    return words.split(" ").sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(method1("is2 Thi1s T4est 3a"))