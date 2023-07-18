function rot13(str){
return str.split("").map((_,i) => {
        
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            let value = str.charCodeAt(i)+13
            if(value< 91){
                return String.fromCharCode(value)
            }
            else{
                return String.fromCharCode(value-90+64)
            }
        }
        else if(97<=str.charCodeAt(i) && str.charCodeAt(i)<=122){
            let value = str.charCodeAt(i)+13
            if(value < 123){
                return String.fromCharCode(value)
            }
            else{
                return String.fromCharCode(value-122+96)
            }
        }
        else{
            return _
        }
}).join("")
}


function method1(str){
    return (message + '')
    .replace(/[a-z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
}


function method2(message){
    
        var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
        return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
    
}
console.log(String.fromCharCode())
console.log(rot13("EBG13 rknzcyr."))