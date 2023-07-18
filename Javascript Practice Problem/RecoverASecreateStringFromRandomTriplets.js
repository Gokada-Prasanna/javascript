var method3 = function(triplets){
console.log(triplets.sort())
let newString = ""
triplets.map(item => {
    let tripletString = item.join("")
    for(let i=0; i<tripletString.length; i++){
        if(newString.indexOf(tripletString[i]) === -1){
            if(newString.indexOf(tripletString[i+1])===-1){
                newString += tripletString[i]
                console.log(newString+" "+item)
            }
            else{
                newString = newString.slice(0,newString.indexOf(tripletString[i+1]))+tripletString[i]+newString.slice(newString.indexOf(tripletString[i+1]))
                console.log(newString+" "+item)
            }
        }

    }


})

return newString
}

// let triplets = [['t','u','p'],
// ['w','h','i'],
// ['t','s','u'],
// ['a','t','s'],
// ['h','a','p'],
// ['t','i','s'],
// ['w','h','s']]
// console.log(recoverSecret(triplets))

function findNext(duplets) {
    // 1st char is not the 2nd char in any duplet
    // console.log(duplets)
    let nxt = duplets.find(d => duplets.every(_d => d[0] !== _d[1])); 
    return duplets.length > 1 ? nxt[0] : duplets[0];
  }
  

function method1(triplets){
    let duplets = []
    let res = ''

    triplets.forEach(trip => {
        let str = trip.join('');
        let d1 = str.substr(0,2);
        let d2 = str.substr(1,3);
        if (duplets.indexOf(d1) === -1) { duplets.push(d1); } 
        if (duplets.indexOf(d2) === -1) { duplets.push(d2); }
      });

    
      let nxt = findNext(duplets);
      
  while (nxt) {
    res += nxt;
    duplets = duplets.filter(d => d.indexOf(nxt) === -1);
    nxt = findNext(duplets);
  }
  
  return res;
}


var recoverSecret = function(triplets) {
    for(var [first] of triplets)
    {
      if (triplets.every(tuple => tuple.indexOf(first) <= 0))
      {
        triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
        return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
      }
    }
    return '';
  }

  var method1 = function(triplets) {
    var nodes = []
    var graph = {}
    var sortedlist = []
  
    function visit(node) {
      if (sortedlist.indexOf(node) < 0) {
        (graph[node] || []).forEach(function (node2) { visit(node2) })
        sortedlist.unshift(node)
      }
    }
  
    triplets.forEach(function (triplet) {
      triplet.forEach(function (node) {
        if (nodes.indexOf(node) < 0) nodes.push(node);
      })
      graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
      graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
    })
  
    while (nodes.length) visit(nodes.pop());
    return sortedlist.join('');
  }

  const method2 = triplets => {
    let str = ``;
    while (triplets.some(val => val.length)) {
      str += [...new Set(triplets.map(val => val[0]))].filter(val => triplets.every(v => v.indexOf(val) < 1));
      triplets = triplets.map(val => val.filter(v => v !== str.slice(-1))).filter(val => val.length);
    }
    return str;
  };
  
let triplets = [['t','u','p'],
['w','h','i'],
['t','s','u'],
['a','t','s'],
['h','a','p'],
['t','i','s'],
['w','h','s']]

console.log(method3(triplets))