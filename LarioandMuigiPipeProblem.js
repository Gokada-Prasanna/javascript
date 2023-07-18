function pipeFix(numbers){    
    return Array.from({length:Math.max(...numbers)-Math.min(...numbers)+1}, (v=Math.min(...numbers),i) => v+i)
}

function method1(numbers){
    return Array.from({ length: numbers.pop() - numbers[0] + 1 }, (v, i) => i + numbers[0]);
}

console.log(pipeFix([6,9]))
console.log(method1([6,9]))