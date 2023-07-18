function high(x){
    function findAsciiSum(word){
        
        return word.split("").reduce((a,b) => a+(b.charCodeAt()-96),0)
    }
let result =""
let sum = 0
 x.split(" ").map(item => {
    if(findAsciiSum(item)>sum){
        sum = findAsciiSum(item)
        result = item
    }
})
return result
}


function method1(x){
    let as = x.split(" ").map(item => [...item].reduce((a,b) => a+(b.charCodeAt()),0))
    return x.split(" ")[as.indexOf(Math.max(...as))]
}

let x ="what time are we climbing up the volcan"
console.log(method1(x))