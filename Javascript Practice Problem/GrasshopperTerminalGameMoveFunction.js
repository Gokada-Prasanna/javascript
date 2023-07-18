function move(position, role){
    return position+2*role
}

function method1(p, r, n){
    return p+ [n=-~[],++n][-~[]]*r 
}

function method2(_, __){
return _+2*__
}
//~ bit-wise operator
// [] when converted to number returns 0, ~x = -(x+1), -(x) = -x 


console.log(move(3,6))
console.log(method1(3,6))
console.log(method2(3,6))