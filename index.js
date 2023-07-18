function sortByLength (array) {
    let obj = {}
    array.forEach((i, ind) => {
        obj[ind] = i.length
    })
    
    
    return Object.values(obj).sort((a,b) => a-b).map(i => Object.keys(obj).find(j => obj[j]===i)).map(i => array[i])
  };

  console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))