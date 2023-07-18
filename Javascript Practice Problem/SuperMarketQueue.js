function queueTime(customers, n){
let arr = Array(n).fill(0)
customers.forEach(i => {
    arr[arr.indexOf(Math.min(...arr))] += i 
})

return Math.max(...arr)
}


function method1(customers, n){
    return Math.max(0, ...customers.slice(n).reduce((pre, val) => (pre[pre.indexOf(Math.min(...pre))] += val, pre), customers.slice(0, n)));
}


console.log(method1([2,2,3,3,4,4], 2))