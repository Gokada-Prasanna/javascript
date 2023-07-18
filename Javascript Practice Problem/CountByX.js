function CountBy(x,n){
    return Array.from({length:n}, (_,i) => x*(i+1))
}

console.log(CountBy(2,5))