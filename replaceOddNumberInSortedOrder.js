
function Method1(arr){
oddArr = arr.filter(item => {
    if(parseInt(item.toString().match(/\w+/)[0])%2 == 1){
        return item
    }
})

oddArr.sort(function(a,b){return a-b})


let i=0
return (arr.map(item => {
    if(item.toString().match(/\w+/)[0]%2==1){
        
        item = oddArr[i]
        i++
        return item
    }
    if(item == 0){
        return item
    }
    return item
}))
}

function Method2(arr){
    const odd = arr.filter((x) => x % 2).sort((a,b) => a - b);
  return arr.map((x) => x % 2 ? odd.shift() : x);
}

let arr=[20, -13, -45, 4, 0, -26, -20, -23, 16, 11, -20, 23]


// console.log(Method1(arr))
console.log(Method2(arr))
