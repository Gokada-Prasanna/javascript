function findMultiples(integer, limit){
    let result = []
    for(let i=integer; i<=limit; i++){
      if(!(i%integer)){
        result.push(i)
      }
    }
    
    return result
}

function method1(int, limit){
    let result = [] 
    for(let i=int; i<=limit; i+=int){
        result.push(i) 
    }

    return result
}

function method2(int, limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i) => int*(i+1))
}

function method3(int, limit){
    return Array.from({length: parseInt(limit/int)}, (_,i) => int*(i+1))
}


function method4(int, limit){
    return [...Array(limit / int ^ 0)].map((_, idx) => ++idx * int);
}

console.log(method4(11,54))

