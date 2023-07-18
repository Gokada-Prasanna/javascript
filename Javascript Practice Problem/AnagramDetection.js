var isAnagram = function(test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
  };


var method1 = function(test, original){
    if(test.length !== original.length){
        return false 
    }
    else{
        return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
    }
}

  console.log(method1("dumble", "bumble"))