

// function strongNumber(n){
//   n = n.toString()

//   function fact(x){
//     x=parseInt(x)
//     if(x===0){
      
//       return 1
//     }
//     return x*fact(x-1)
//   }
//   return n.split("").reduce((a,b) => a+fact(b), 0) === parseInt(n) ? "STRONG!!!" : "Not Strong !!"
// }

// console.log(strongNumber(660))


// function correctPolishLetters (string) {
//     const letters = {
//       "ą" : "a",
//       "ć" : "c",
//       "ę" : "e",
//       "ł" : "l",
//       "ń" : "n",
//       "ó" : "o",
//       "ś" : "s",
//       "ź" : "z",
//       "ż" : "z"
//     }

//     return string.split("").map(item => {
//         if(letters[item] === undefined){
//             return item 
//         }
//         else{
//             return letters[item]
//         }
//     }
//     ).join("")
//   }


// function method1(string){
// var dict = {"ą" : "a",
// "ć" : "c",
// "ę" : "e",
// "ł" : "l",
// "ń" : "n",
// "ó" : "o",
// "ś" : "s",
// "ź" : "z",
// "ż" : "z"}

// return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
// }


// function method2 (string) {
//     return string
//     .replace(/ł/g, 'l')
//     .replace(/ą/g, 'a')
//     .replace(/ć/g, 'c')
//     .replace(/ę/g, 'e')
//     .replace(/ń/g, 'n')
//     .replace(/ó/g, 'o')
//     .replace(/ś/g, 's')
//     .replace(/ź/g, 'z')
//     .replace(/ż/g, 'z')
//   }


//   function method3(s) {
//     return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
//   }
// console.log(correctPolishLetters("Jędrzej Błądziński"))
// console.log(method1("Jędrzej Błądziński"))
// console.log(method2("Jędrzej Błądziński"))
// console.log(method3("Jędrzej Błądziński"))