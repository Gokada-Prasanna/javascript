var number = function(busStops){
    let In = 0; 
    let out = 0;

    busStops.forEach(item => {
        In+=item[0]
        out+=item[1]
    })

    return In-out
  }

  function method1(busStops){
    return busStops.reduce((a,[on,off])=>a+on-off,0)
  }

  function method2(busStops){
    return busStops.reduce((a,b) => a+b[0]-b[1],0)
  }

let busStops = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]
console.log(method2(busStops))