function Method1(num){
    let sum = num*(num+1)/2
    
    for(let i =0 ;i<num;i++){
        for(let j=0; j<num; j++){
            if(i !== j){
            if(i*j === sum -(i+j)){
                console.log([i,j])
            }
        }
        }
    }
}

function Method2 (n) {
    let sum = n*(n+1)/2
    let result = [] 
    for(let i=0; i<n; i++){
      j = (sum-i) /(i+1)
      
      j%1 === 0 && j<=n ? result.push([i,j]) : result.push()
    }
      
      return result
  }


  function Method3(n){
    const removeNb = n =>
  [...Array(n)].map((_, idx) => ((n ** 2 / n) / 2 - ++idx) / ++idx)
                                        .reduce((pre, val, idx) => 
  Number.isInteger(val) && val < n ? [...pre, [++idx, val]] : pre, []);
  }

  function Method4(n){
    [...Array(n)].map((_, idx) => ((n ** 2 /n) / 2 - ++idx) / ++idx)
  }

console.log(Method4(101))