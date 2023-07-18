function convert(string){
   let strng = string.split(" ")
   strng = strng.map((item,index) => item = item[0].toUpperCase()+item.slice(1)).join("")
   return "#"+strng.length >= 140 ? false : "#"+strng
}

let string = "Hello prasanna how are you?"
console.log(convert(string))