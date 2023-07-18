function past(h, m, s){
    return (h*60*60+(m*60+s))*1000
}

console.log(past(0,1,1))