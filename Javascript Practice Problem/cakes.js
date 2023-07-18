function cakes(recipe, ingredients){
if(Object.keys(recipe).length > Object.keys(ingredients).length){
    return 0
}
else{
    Object.keys(recipe).map(i => {
        recipe[i] = (parseInt(ingredients[i]/recipe[i]))
    })
    return Math.min(...Object.values(recipe))
}
}

function method1(recipe, ingredients){
    return Math.min(...Object.keys(recipe).map(i => Math.floor(ingredients[i]/recipe[i] || 0)))
}

let recipe = {flour: 500, sugar: 200, eggs: 1}
let ingredients = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
console.log(method1(recipe, ingredients))