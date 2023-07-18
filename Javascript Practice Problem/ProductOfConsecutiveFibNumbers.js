
function productFib(prod){
    let num1 = 0 
    let num2 = 1 

    while(num1*num2 !== prod){
        let num3 = num1+num2 
        num1 = num2 
        num2 = num3
        if(num1*num2 > prod){
            break 
        }
    } 
    if(num1*num2 > prod){
        return [num1, num2, false] 
    }
    else{
        return [num1, num2, true]
    }

}

console.log(productFib(74049690))



