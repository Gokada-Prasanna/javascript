String.prototype.toAlternatingCase = function () {
  return this.split("").map(item => {
    if(item === item.toUpperCase()){
        return item.toLowerCase()
    }
    else if(item === item.toLowerCase()){
        return item.toUpperCase()
    }
    else{
        return item
    }
  }).join("")
}

String.prototype.method1 = function () {
    return this.split("").map(item => item===item.toLowerCase()?item.toUpperCase():this.toLowerCase()).join("")
}

console.log("hello world".method1())