function accum(s){
return s.split("").map((_,i) => _.toUpperCase()+_.toLowerCase().repeat(i)).join("-")
}

console.log(accum("ZpglnRxqenU"))