// function incrementString (strng) {
//     let charString = ""
//     let numString = ""
    
    
// let numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//   let index = strng.length
//   for(let i =strng.length-1 ; i>=0; i--){
//       if(!numArray.includes(strng[i])){
//           break
//       }
//       index = i 
//   }
  
//   strng = strng.split("")
//   if(index === strng.length){
//     numString = "0"
//       charString = strng.join("")
  
//   }
//     else if(index ==  0){
//       charString = ""
//       numString = strng.join("")
//     }
//   else{
//       numString = strng.slice(index).join("")
//   charString = strng.slice(0, index).join("")
//   }



//     if(numString.length !== 0){
//       let changeNumString = parseInt(numString) + 1
//       if(numString.length > changeNumString.toString().length){
//           let diff = numString.length - changeNumString.toString().length 
//           let newNumString = ""
//           for(let i = 0 ; i<diff; i++){
//               newNumString += "0"
//           }
//           newNumString += changeNumString.toString()
//           numString = newNumString
//       }
//       else{
//           numString = changeNumString.toString()
//       }
//     }
//     else{
//       numString = 1 
//     }
    
//     let newString = charString + numString 
    
//     return newString
//   }
  

// Method:1
// function incrementString(input) {
//   if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//   return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     console.log(p1.slice(0, -1))
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }


// Method:2

// function incrementString(str){
// 	var c = str[str.length-1];
// 		switch(c){
//             case '0':
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
//             case '9': return incrementString(str.substring(0, str.length-1)) + 0;
//             default: return str+"1";
//                 }
// }


const incrementString = strng =>
  strng.replace(/[0-8]?9*$/, val => ++val)

let strng = "foobar099"
 console.log(incrementString(strng)) 