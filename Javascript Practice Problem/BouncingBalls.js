function bouncingBall(h,  bounce,  window) {
    if(bounce < 0 || bounce > 1){
      return -1
    }
    if(h <= window){
          return -1
      }
      else{
          let result = 0
          while(h>window){
            result += 1
          h = h*bounce
            if(h>window){
          result += 1
  }
      }
      return result
      }
  }


function method1(h, bounce, window){
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
}

console.log(method1(30, 0.75, 1.5))
