function likes(names){
    let length = names.length 

    switch(length){
        case 0: return "no one likes this"

        case 1: return `${names[0]} likes this`
        
        case 2: return `${names[0]} and ${names[1]} like this`

        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`

        default : return `${names[0]}, ${names[1]} and ${length-2} others like this`
    }
    
}

function Method2(names){
        var templates = [
          'no one likes this',
          '{name} likes this',
          '{name} and {name} like this',
          '{name}, {name} and {name} like this',
          '{name}, {name} and {n} others like this'
        ];
        var idx = Math.min(names.length, 4);
        
        return templates[idx].replace(/{name}|{n}/g, function (val) {
          return val === '{name}' ? names.shift() : names.length;
        });
      
}

let names = ["Peter", "Alex", "Jacob", "Jack", "James"] 
console.log(Method2(names))