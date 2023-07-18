function enough(cap, on, wait){
    return cap-on >= wait ? 0 : wait-cap+on 
}

function method1(cap, on, wait){
    return Math.max(wait+on-cap, 0)
}

console.log(enough(20, 10, 5))