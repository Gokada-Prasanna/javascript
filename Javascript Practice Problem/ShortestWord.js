function findShort(s){
    return Math.min(...(s.split(" ").map(i => i.length)))
}

function method1(s){
    return s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length
}

console.log(Math.min.apply(0, [1,2,3,4,5])) // Math.min.apply(0, arr) finds the minimum of the array
console.log(findShort("Let's travel abroad shall we"))
console.log(method1("Let's travel abroad shall we"))
// console.log(Math.max.apply(0,[1,2,3,4,5]))
// console.log(Array.from({length: 5}, (_,i) => i+1))
let a = [1,2,3,4,5]
console.log(Math.min.call(...a))