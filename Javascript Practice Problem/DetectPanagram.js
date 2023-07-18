function isPangram(string){
return new Set(string.toLowerCase().replaceAll(" ", "").replace(".", "")).size === 26
}

let string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string))