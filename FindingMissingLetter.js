function method1(strng) {
    

const baseIndex = strng[0].charCodeAt()

for(let i=0 ; i<strng.length; i++) {
    if(strng[i].charCodeAt()-baseIndex !== i){
        return (String.fromCharCode(i+baseIndex));
    }

}
return null 
}

const method2 = (array) => {
    
    for(i=0;i<array.length ; i++){
 
        const prevlet = array[i].charCodeAt() 
        const currentlet = array[i+1].charCodeAt() 

        if(currentlet - prevlet !==1){

            return String.fromCharCode(currentlet - 1)
        }
    }

    return null


  }

let strng = ["p","q","s"]
console.log(method2(strng))