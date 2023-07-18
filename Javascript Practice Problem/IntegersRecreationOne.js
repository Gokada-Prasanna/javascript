function listSquared(m,n){
    let resultArray = []
    function findDivisors(num){
        if(num === 1){
            return 1
        }
        const uptoNum = Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : Math.ceil(Math.sqrt(num))
        let arraylist = []
        for(let i = 1; i<uptoNum; i++){
            if(num % i === 0 ) {
                arraylist.push(i*i)
                if((num /i)%1===0) {arraylist.push(num/i*num/i)}
            }
            
        }
    
        
    
        if(Math.sqrt(arraylist.reduce((a,b) => a+b,0))%1 === 0){
            return arraylist.reduce((a,b) => a+b,0)
        }
    return 0 
    }
for(let i = m; i<=n ; i++){
if(findDivisors(i) !== 0){
resultArray.push([i, findDivisors(i)])
}
}
return resultArray
}


// function findDivisors(num){
//     if(num === 1){
//         return 1
//     }
//     const uptoNum = Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : Math.ceil(Math.sqrt(num))
//     let arraylist = []
//     for(let i = 1; i<uptoNum; i++){
//         if(num % i === 0 ) {
//             arraylist.push(i)
//             if((num /i)%1===0) {arraylist.push(num/i)}
//         }
        
//     }
 
//     arraylist = arraylist.map(item => item*item)

//     if(Math.sqrt(arraylist.reduce((a,b) => a+b,0))%1 === 0){
//         return arraylist.reduce((a,b) => a+b,0)
//     }
// return 0 
// }

// console.log(findDivisors(42))

function Method2(m,n){
        var arr = [];
        for (var i = m; i <= n; i++){
          var temp = 0;
          for (var j = 1; j <= i; j++) {
            if ( i % j == 0) temp += j*j;  
          };
          if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
        };
        return arr;
      
}


function Method3(m,n){
	let chamber = {};
	function wuTang(x){
		let i = 1, odb = [], meth;
		while (i <= x){!(x % i) ? (odb.push(i),i++) : i++}
		meth = odb.reduce((a,e) => (chamber[e] ? chamber[e] : (chamber[e] = e * e, chamber[e])) + a,0);
		return !(Math.sqrt(meth) % 1) ? [--i,meth] : null;
	}
	return Array.from({length:(n - m)},(e,i) => wuTang(i + m)).filter(e => e);
}


const Method4 = (m, n) => {
    const res = [];
    for (let i = m; i <= n; i++) {
      let sum = 0;
      for (let j = 1; j <= n; j++) {
        if (!(i % j)) sum += j ** 2;
      }
      if (Number.isInteger(sum ** .5)) res.push([i, sum]);
    }
    return res;
  };

  function Method5(m, n) {
    let answer = [];
    for(let i=m; i<=n; i++){                              //loop through each digit m --> n
      let squaredArray = [];
      for (let j=1; j<=i; j++){
        if (i % j === 0){                                 //find each digit's divisors
          squaredArray.push(Math.pow(j,2));               //square them and pop them in an array
        }
      }
      
     let squaredSum = squaredArray.reduce((a,b) => a+b);  //reduce that array
     
     if (Number.isInteger(Math.sqrt(squaredSum))){        //check if the square root of that reduction is an integer
       answer.push(Array.of(i, squaredSum));              //push it along with the original number as an Array
     }
  }
  return answer;                                          //return it like you bought it from Bed, Bath, and Beyond
}

function Method6(m, n) {
	const divs = _ => [...Array(~~Math.sqrt(_))].reduce((a, b, i) => {
  	i++
  	return _ % i ? a : a + Math.pow(i, 2) + Math.pow(i == _ / i ? 0 : _ / i, 2)
  }, 0)
  const res = []
  for (let i = m; i <= n; i++) {
  	let d = divs(i)
    if (Math.sqrt(d) % 1 == 0) res.push([i, d])
  }
  return res
}

console.log(listSquared(1, 250))