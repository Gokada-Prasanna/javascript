function diamond(n){
    if(n<0 || n%2 === 0){
        return null 
    }
    if(n==1){
        return "*"+"\n"
    }
    let result = "*".repeat(n)
    n = n-2
    let i = 1
    while(n>0){
        result =" ".repeat(i)+"*".repeat(n)+"\n" +result + "\n" + " ".repeat(i) +"*".repeat(n)
        n = n-2
        i = i+1
    }
    return result + "\n"
}

console.log(diamond(-1))