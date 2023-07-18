function gimme (triplet) {
    let array = [...triplet]
    return triplet.indexOf(array.sort((a,b) => a-b)[parseInt(array.length/2)])
 }


 function method1(triplet){
    
    return triplet.indexOf([...triplet].sort((a,b) => a-b)[parseInt([...triplet].length/2)])
 }


 function method2(triplet){
    return triplet.indexOf([...triplet].sort((a,b) => a-b)[1])
 }

 console.log(method2([2,3,1]))
 console.log(method2([5,10,14]))