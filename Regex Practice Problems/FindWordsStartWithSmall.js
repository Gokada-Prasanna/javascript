let string = "Satya Sai naga"

string.match(/\w+/g).map(item => /^[a-z]/.test(item) ? console.log(item) : "")




