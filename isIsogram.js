let s = "prasanna".toLowerCase()
var flag = true 

for(let i =0 ; i<s.length; i++){
    
     if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])){
flag = false
         break
     }
 }

 console.log(flag)

// Method : 1
// for(let i=0; i<s.length; i++){
//     if(s.substring(i+1).includes(s.charAt(i))){
//         flag = false
//         break
//     }
// }


// Method:2
// let s_length = s.length
// let string_set_length = Array.from(new Set(s.toLowerCase())).length


// if(s_length != string_set_length){
//     flag = false 
// }


Method:3 

// function Method3(str){
    
//     return (new Set(str.toLowerCase()).size === str.length)
// }


// console.log(flag)