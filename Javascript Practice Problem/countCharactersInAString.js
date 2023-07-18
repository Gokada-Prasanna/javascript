function Method1(strng){
    let objectValue = {} 

    strng.split("").map(item => {
        objectValue.hasOwnProperty(item) ? objectValue[item] += 1: objectValue[item] = 1
    })
    return objectValue
}

function Method2(strng){
let objectValue = {}

strng.split("").forEach(item => {
    objectValue[item] ? objectValue[item]++ : objectValue[item] =1
})
return objectValue
}

function Method3(strng){
    let objectValue = {} 

    strng.split("").forEach(item => {
        if(!objectValue[item]){
            objectValue[item]= strng.split("").filter(i => i===item).length
        }
    })
    return objectValue
}

function Method4(strng){
    let cache = {}

    strng.split("").filter(i => {
        cache[i] = (cache[i]||0)+1
    })

    return cache 
}
const strng = ""
console.log(Method4(strng))
