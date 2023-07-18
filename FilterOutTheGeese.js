function geeseFilter(birds){
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; 

    return birds.filter(i => geese.indexOf(i) === -1)
}

console.log(geeseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]