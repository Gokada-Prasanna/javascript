let strng = "Hi I am Two"
let strng1 = "Hi I am Twentytwo"
let strng2 = "Hi I am Thirty"



console.log(!/b/g.test(strng))

console.log(/two/gi.test(strng))
console.log(/two/gi.test(strng1))
console.log(/two/gi.test(strng2))

let arr = ["goal", "new", "user", "sit", "eat", "dinner"]

console.log(arr.filter(item => !/e/g.test(item)))


let strng3 = "They ate 5 apples and 5 oranges"

console.log(strng3.replace(/5/, "five"))

let strng4 = "This note should not be NoTeD"

console.log(strng4.replace(/note/gi, "X"))

let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`

console.log(purchases.split("\n").filter(item => !/2/.test(item)).join("\n"))

let para = `good start
start working on that
project you always wanted
to, do not let it end
hi there
start and end the end
42
Start and try to
finish the End
bye`

console.log(para.replace(/^start.*?end$/igms, ""))

let ip = 'a<apple> 1<> b<bye> 2<> c<cat>'

console.log(ip.replace(/<\w+>/g, " "))


let s1 = 'go there  ::   this :: that'
let s2 = 'a::b :: c::d e::f :: 4::5'
let s3 = '42:: hi::bye::see :: carefully'

console.log(s1.split(/ +:: +(.+)/, 2))
console.log(s1.match(/\b\w+.+?\w+\b/g))

console.log(s2.split(/ +:: +(.+)/, 2))
console.log(s2.match(/\b\w+.+?\w+\b/g))

console.log(s3.split(/ +:: +(.+)/, 2))
console.log(s3.match(/\b\w+.+?\w+\b/g))

