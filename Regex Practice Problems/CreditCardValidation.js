let num = 3511345678912345

console.log(/^(34|37)\d{13}$/.test(num))
console.log(/(^4\d{12}$|^4\d{15}$)/.test(num))
console.log(/^5[1-5]{1}\d{14}$/.test(num))
console.log(/^6011\d{12}|^5\d{14}$/.test(num))
console.log(/^30[0-5]{1}\d{11}|^3(6|8)\d{12}$/.test(num))
console.log(/^(2131|1800)\d{11}|^35\d{14}$/.test(num))