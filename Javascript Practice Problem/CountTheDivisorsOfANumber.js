function getDivisorsCnt(n){
    if(n===1){
      return 1
    }
      let result = 0 
      for(let i=1; i<=parseInt(Math.sqrt(n)); i++){
          if(n%i === 0 && parseInt(n/i)*parseInt(n/i)!==n){
              result += 2
          }
        if(n%i && parseInt(n/i)*parseInt(n/i)===n){
          result += 1
        }
      }
  if(Math.sqrt(n)%1===0){
    result += 1
  }
      return result
  }

console.log(getDivisorsCnt(25))