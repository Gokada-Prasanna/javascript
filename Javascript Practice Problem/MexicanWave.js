function wave(str){
// return [...Array(5)].map((index) => str.slice(0,index)+str[index].toUpperCase()+str.slice(index+1))
return [...Array(str.length)].map((item,index) => str.slice(0,index)+str[index].toUpperCase()+str.slice(index+1)).filter(item => /[A-Z]/g.test(item))
}

let str = "two words"
console.log(wave(str))