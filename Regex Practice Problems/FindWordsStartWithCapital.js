let string = "Satya Sai naga"

string.match(/\w+/g).map(item => /^[A-Z]/.test(item) ? console.log(item) : "")
