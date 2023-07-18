function uniqueInOrder(string){
    let newArray = [] 
    if(string.length === 0){
        return []
    }
    string = string.split("")
    newArray.push(string[0])
    for(let i=1; i<string.length; i++){
        if(string[i] !== string[i-1]){
            newArray.push(string[i])
        }
    }
    return newArray 
}

function Method1(string){
    let result = []
    let late 

    for(let i =0; i<string.length; i++){
        if(string[i] !== late){
            result.push(late = string[i])
        }
    }

    return result
}

function Method2(string){
    return [...string].filter((item, index) => item !== string[index-1])
}

let string = "AABBCcDDAABB"
console.log(Method2(string))