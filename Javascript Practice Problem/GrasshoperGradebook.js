function getGrade (s1, s2, s3) {
    // Code here
    const avg = parseInt((s1+s2+s3)/3)
    
    
    if(90<=avg && avg<=100){
      return 'A'
    }
    if(80<=avg && avg<90){
            return 'B'
            }
    if(70<=avg && avg<80){
      return 'C'
    }
    if(60<=avg && avg<70){
      return 'D'
    }
    if(0<=avg && avg<60){
      return 'F'
    }
  }


  function Method1(s1,s2,s3){
    const avg = parseInt((s1+s2+s3)/3)

    return avg >= 90 ? "A" : avg >=80? "B" : avg >=70 ? "C": avg >= 60 ? "D" : "F"
  }
  console.log(Method1(70,70,100))