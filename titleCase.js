function titleCase(title, minorWords){
    
    if(title === ""){
        return " "
    }

    else if(minorWords !== undefined){
    title = title.split(" ").map((_,i) => {
        if(i===0){
            return _[0].toUpperCase()+_.slice(1).toLowerCase()
        }
        else{
            let minorWords_1 = minorWords.split(" ").map(i => i.toLowerCase())
            return (minorWords_1.indexOf(_.toLowerCase()) !== -1 ?  minorWords_1[minorWords_1.indexOf(_.toLowerCase())].toLowerCase() : _[0].toUpperCase()+_.slice(1).toLowerCase())
        }
    })
}
else{
    title = title.split(" ").map((_,i) => {
        return _[0].toUpperCase()+_.slice(1).toLowerCase()
    })
}
    

    return title.join(" ")
}


function method1(title, minorWords){
    minorWords = (minorWords || "").toLowerCase().split(' ');
    title = title.toLowerCase();
    return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
      if (index === 0 || minorWords.indexOf(word) === -1)
        word = word.replace(firstChar, firstChar.toUpperCase());
      return word;
    });
}

console.log(titleCase(''))
console.log(method1(""))



