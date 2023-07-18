function encrypt(text, n){
    if(n<=0){
        return text 
    }
  if(text === "" || text===null){
    return text
  }
    while(n>0){
        let oddP = text.split("").filter((_, index) => index%2===1).join("")
        let evenP = text.split("").filter((_, index) => index%2===0).join("")
        text = oddP+evenP
        n -= 1
    }
return text
}

function decrypt(text, n){
if(n<=0){
  return text
}

if(text === "" || text===null){
    return text
}  


while(n>0){
let index = 0 
let result = ""  
let oddP = text.slice(0,parseInt(text.length/2))
let evenP = text.slice(parseInt(text.length/2))

if(!(text.length%2)){
    
    while(index < evenP.length){
        result += evenP[index]+oddP[index]
        index += 1
    }
}
else{
    
    while(index < oddP.length){
        result += evenP[index] + oddP[index]
        index += 1
    }

    result += evenP[index]
}
  
  text = result
  
  n -= 1
}
return text
}

function encryptMethod1(text, n) {
	for (let i = 0; i < n; i++) {
  	text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decryptMethod1(text, n) {
	let l = text && text.length / 2 | 0
	for (let i = 0; i < n; i++) {
  	text = text.slice(l).replace(/./g, (_, i) =>  _ + (i < l ? text[i] : ''))
  }
  return text
}
console.log(decryptMethod1("This is a test!", 4))
