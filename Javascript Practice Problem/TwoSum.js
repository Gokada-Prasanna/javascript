function twoSum(numbers, target){
let result = [] 
let newResult = []
numbers.map((item, index) => {
    if(numbers.indexOf(target-item) !== -1 && index !== numbers.indexOf(target-item)){
        let pair = [index, numbers.indexOf(target-item)].sort((a,b) => a-b )

        !result.includes(pair)? result.push([index, numbers.indexOf(target-item)].sort((a,b) => a-b)) : result
    }
})

result = result.filter(item => {
    item = item.join("")
    if(newResult.indexOf(item)===-1){
        newResult.push(item)
        return item
    }
})


return result[0]
// for(let i of numbers){
//     if(numbers.indexOf(target-i) !== -1){
//         return [numbers.indexOf(i), numbers.indexOf(target-i)]
//     }
// }
}

function method1(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
}

function method2(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }
  }

let numbers = [1,2,3,2]
let target = 4 

console.log(twoSum(numbers, target))