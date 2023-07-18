function warnTheSheep(queue){
    return queue.reverse().indexOf("wolf") === 0 ? "Pls go away and stop eating my sheep" :  `Oi! Sheep number ${queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "wolf", "sheep"]))