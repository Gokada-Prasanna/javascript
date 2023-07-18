let arr = [1, 4, 4, 3, 3, 3]


arr.sort((a,b) => a-b)



let i =0
while(i<arr.length){
    let first = arr.indexOf(arr[i])
    let last = arr.lastIndexOf(arr[i])
    if((last - first+1)%2 !== 0){
        console.log(arr[i])
    }
i = arr.lastIndexOf(arr[i]) +1
}