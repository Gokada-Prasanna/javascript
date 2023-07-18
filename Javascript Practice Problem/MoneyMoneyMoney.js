function calculateYears(principal, interest, tax, desired){
if(principal === desired){
    return 0
}
let i = 0

do{
principal += (principal*interest)-(principal*interest)*tax
i += 1 
}while(principal < desired)
return i
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))