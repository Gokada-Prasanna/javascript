function isValidWalk(walk) {
    if(walk.length > 10){
      return false
    }
    if(walk.length < 10){
      return false
    }
    walk = (walk.join("")).replace(/(ns)/g, "").replace(/(sn)/g, "").replace(/(we)/g, "").replace(/(ew)/g, "")
    console.log(walk)

  
    return walk.length === 0
  }


function method1(walk){
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
}
console.log(isValidWalk([
    'n', 'n', 'n', 's',
    's', 's', 'e', 'w',
    'n', 's'
  ]))   