function removeEveryOther(arr){
    return arr.map((_, i) => {
        if(i%2===0){
          return _
        }
        else{
          return undefined
        }
      }).filter(i => i!==undefined)
}

function method1(arr){
    return arr.filter((_,i) => i%2===0)
}

function method2(arr){
    for(let i=1; i< arr.length; i++){
        arr.splice(i,1)
    }
    return arr 
}

console.log(method2(['Hello', 'Goodbye', 'Hello Again']))