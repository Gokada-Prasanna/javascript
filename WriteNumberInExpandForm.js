function expandedForm(num){
    num = (num.toString().split(""))

    let result = "" 

    num.map((_,i) => {
        if(i!==0){
            
            if(_!==(0).toString()){ 
        result = result + " + "+ _+"0".repeat(num.length-(i+1)) 
    }
    }
    else{
        if(_!==(0).toString()){
            result = _+"0".repeat(num.length-(i+1))
        }
        
    }
    })

    return result
}

console.log(expandedForm(70302))