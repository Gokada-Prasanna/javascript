function balanced(n){
    n = n.toString()
    const length = n.length 
  
    if(length%2 === 1){
      return ((n.slice(0, Math.floor(n.length/2)).split("").reduce((a,b) => a+parseInt(b), 0)) === (n.slice(Math.floor(n.length/2)+1).split("").reduce((a,b) => a+parseInt(b),0))) ? "Balanced" : "Not Balanced"
    }
    else{
      return (n.slice(0, Math.floor(n.length/2)-1).split("").reduce((a,b) => a+parseInt(b),0)) === n.slice(Math.floor(n.length/2)+1).split("").reduce((a,b) => a+parseInt(b),0) ? "Balanced" : "Not Balanced"
    }
  }


function method1(number){
    let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced';
}
  
  console.log(method1(17))