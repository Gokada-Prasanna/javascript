function highAndLow(numbers){
numbers = numbers.split(" ").sort((a,b) => a-b)

return Math.max(...numbers)+" "+Math.min(...numbers)
}

function Method2(numbers){
    numbers = numbers.split(" ").map(Number)

    return Math.max(...numbers)+" "+Math.min(...numbers)
}

function Method1(numbers){
    numbers = numbers.split(' ').map(Number);
    
    return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers);
  }

let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"

console.log(Method1(numbers))