function howMuchILoveYou(nbPetals){
switch(nbPetals%6){
    case 1:
        return "I love you"
        break;
    case 2:
        return "a little"
        break;
    case 3:
        return "a lot"
        break;
    case 4:
        return "passionately"
        break;
    case 5:
        return "madly"
        break;
    case 0:
        return "not at all"
        break;
}
}

const phrases = ["not at all", "I love you", "a little", "a lot", "passionately", "madly" ]

function method1(nbPetals){
    return phrases[nbPetals%6]
}

let nbPetals = 6
console.log(method1(nbPetals))