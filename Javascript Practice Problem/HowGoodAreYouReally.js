function betterThanAverage(classPoints, yourPoints) {
    
    return yourPoints >= parseInt((classPoints.reduce((a,b) => a+b, 0) + yourPoints)/(classPoints.length+1))
    
  }
  

  console.log(betterThanAverage([2,3], 5))