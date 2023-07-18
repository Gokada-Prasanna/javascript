function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(sonYearsOld*2 === dadYearsOld){
        return 0
    }
    if(sonYearsOld*2 > dadYearsOld){
        let result = 0 
        while(sonYearsOld*2 > dadYearsOld){
            result += 1
            sonYearsOld -= 1
            dadYearsOld -= 1
        }
        return result 
    }
    else{
        let result = 0 
        while(sonYearsOld*2 < dadYearsOld){
            result += 1 
            sonYearsOld += 1
            dadYearsOld += 1
        }
        return result 
    }
  }


function method1(dadYearsOld, sonYearsOld){
    return Math.abs(dadYearsOld - 2*sonYearsOld)
}

function method3(dadYearsOld, sonYearsOld){
    return dadYearsOld>2*sonYearsOld ? dadYearsOld-2*sonYearsOld : 2*sonYearsOld-dadYearsOld
}

  console.log(method3(36, 7))