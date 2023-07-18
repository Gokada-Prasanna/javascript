function twoSort(s){
    return s.sort()[0].replace(/(.)/g, '$1***').slice(0,-3)
}

function method1(s){
    return s.sort()[0].split("").join("***")
}

function method2(s){
    return [...s.sort()[0]].join("***")
}

function method3(s){
    console.log(s.sort()[0].replace(/(?<=.)(?!$)/g, "***"))
    return s.sort()[0].replace(/(?<=.)(?!$)/g, "***")
}

function method4(s){
    return s.sort()[0].replace(/(?<=.)/g, "***").slice(0, -3)
}



console.log(method3(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))