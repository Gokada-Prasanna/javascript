function Method1(arr,n){
    let i = arr.length-1

    while(arr.length > 0 && i>=0){
        if(arr.filter(item => item===arr[i]).length>n){
            arr.splice(i, 1)
            i = i
        }
        else{
            i -= 1
        }
    }
return arr
}

function Method2(arr, x){
    let cache = {}

    return arr.filter(n => {
        cache[n] = (cache[n] || 0) +1

        return cache[n] <= x 
    })
}


function Method3(arr,x){
let cache = {} 

return arr.filter(n => (cache[n] = cache[n]+1||1) <= x)
}

function Method4(arr, x){
    let cache={}

    return arr.filter(n => ( cache[n] = cache[n] ? cache[n]+1 : 1) <= x)
}

function Method5(arr, x){
    let cache ={} 

    return arr.filter(n => (cache[n] = ~~cache[n]+1) <= x)
}

let arr = [20,37,20,21]
console.log(Method5(arr, 1))