function maxSequence(arr){
    if(arr.every(i => i>0)){
        return arr.reduce((a,b) => a+b, 0)
    }

    if(arr.every(i => i<0) || arr.length === 0){
        return 0
    }


    let max_so_far = Math.max()
    let max_ending_here = 0
    for(let i=0; i<arr.length; i++){
        max_ending_here += arr[i]

        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here 
        }

        if(max_ending_here < 0){
            max_ending_here = 0 
        }
    }

    return max_so_far
}

function method1(arr){
    var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

function method2(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}


function method3(arr){
    var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}

console.log(method2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(method3([1,2,3,4]))

