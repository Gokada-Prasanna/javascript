String.prototype.toJadenCase = function () {
    return this.split(" ").map(i => i[0].toUpperCase()+i.slice(1).toLowerCase()).join(" ")
  };


String.prototype.toJCase = function () {
    return this.split(" ").map(i => i.replace(/(^|\s)[a-zA-Z]/g, function(x){return x.toUpperCase()} )).join(" ")
}


String.prototype.toJCAse = function() {
    return this.replace(/(\s|^)[a-zA-Z]/g, (x) => x.toUpperCase())
}

  let str = "How can mirrors be real if our eyes aren't real."
  console.log(str.toJCAse())
  console.log(str.toJCase())