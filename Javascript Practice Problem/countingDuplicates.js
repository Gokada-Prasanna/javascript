function duplicateCount(text){
let result = 0
let text1 = text.toLowerCase()

while(text.length > 0){
    let textArray = text1.split("")
    console.log(textArray)
    console.log(text)
    
    let char = text[0]
    if(textArray.filter(i => i===char).length > 1){
        result += 1 
        text = textArray.filter(i => i!==char)
    }
    else{
        text = textArray.filter(i => i!==char)
    }
}
console.log(result)
return result
}

function method1(text){
    let cache = {} 
let result = 0
text = text.toLowerCase()
    text.split("").map(i => {
      (!cache[i] ? cache[i]=1 : cache[i]+=1)
    })
    
    Object.keys(cache).map(i => {if(cache[i] > 1){
        result += 1
    }
    })

    return (result)
}

function method2(text){
    console.log(text.toLowerCase().split("").sort().join(""))
    console.log(text.toLowerCase().split("").sort().join("").match(/([^])\1+/g))
    return (text.toLowerCase().split("").sort().join("").match(/([^])\1+/g) || []).length
}

console.log(method2("should ignoree case1"))