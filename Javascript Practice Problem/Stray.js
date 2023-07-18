function stray(numbers){
    numbers.sort((a,b) => a-b)
    return numbers[0]===numbers[1] ? numbers[numbers.length-1]:numbers[0]
}


function method1(numbers){
    return numbers.sort((a,b) => b-a).reduce((a,b) => a^b)
}



    const method2 = nums => nums.reduce((a, b) => a ^ b);


console.log(stray([17, 17, 17, 3, 17]))
console.log(method1([17,3,17]))
console.log(method2([17, 17, 17, 3, 17]))

