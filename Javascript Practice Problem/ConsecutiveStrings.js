function longestConsec(stararr, k){
    if(k<=0 || k>stararr.length || stararr.length===0){
        return ""
    }

    for(let i=0; i<stararr.length-(k-1); i++){
        stararr[i] = stararr.slice(i,i+k).join("")
      }

      
      let arr = stararr.splice(0,stararr.length-(k-1))  
      let result = []
      arr.forEach((_,i) => result[i]=arr[i].length)

  return arr[result.indexOf(Math.max(...result))]
}


function method1(strarr, k){
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}

function method2(strarr, k){
    if (k <= 0 || k > strarr.length) {
        return '';
      }
      
      return strarr.reduce((long, item, i) => {
        const currString = strarr.slice(i, i + k).join('');
        return (currString.length > long.length)
          ? currString
          : long;
      }, '');
}


function method3(strarr, k){
    if (k <= 0 || k > strarr.length) {
        return "";
      }
      
      return strarr
      .map((value, index) => (
        strarr.slice(index, index+k).join('')
      ))
      .reduce((longest, current) => current.length > longest.length ? current : longest)
}

function method4(strarr, k){
    if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}

const method5 = (a, k) => (k < 1 || a.length < 1 || k > a.length)
// Test for k
  ? ''
// Map Reduce for longest k combo string
  : a.map((_, i, a) => a.slice(i, i + k).join(''))
  .reduce((a, b) => a.length >= b.length ? a : b)

console.log(method4(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))