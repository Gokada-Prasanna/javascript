function testing(array){
    if(array.length === 0){
        return array 
    }
    else{
        array = array.map((item, index) => item= `${index+1}: ${item}`)
    }
    return array 
}

function Method2(array){
    return array.map((item, index) => `${index+1}: ${item}`)
}

let array = ['a', 'b', 'c']
console.log(Method2(array))
