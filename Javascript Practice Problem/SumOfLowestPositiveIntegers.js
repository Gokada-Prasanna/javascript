function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort((a,b) => a-b)
    return parseInt(numbers[0])+parseInt(numbers[1])
}


function Method2(numbers){
    var [a,b] = numbers.sort((a,b) => a-b)
    return a+b
}

function Method3(numbers){
    return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a+b, 0)
}

let numbers = [12, 5, 2, 25]
console.log(Method3(numbers))