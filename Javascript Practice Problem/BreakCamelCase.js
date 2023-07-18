function Method1(string){
    let newList = []
    let i_index =0;
    let l_index = 0;
    string.split("").map((item, index) => {
        l_index = index
        if(item === item.toUpperCase()){
            newList.push(string.slice(i_index,l_index))
            i_index = l_index
        }
        if(l_index === string.length-1){
            newList.push(string.slice(i_index, l_index+1))
        }
    })
    
    
    return(newList.length === 0 ? "": newList.join(" "))
}

function Method2(string){
    return(string.replace(/[A-Z]/g, " $&"))
}

function Method3(string){
    return (string.split("").map(item =>{
        if(item === item.toUpperCase()){
            item = ` ${item}`
        }
        return item
    }).join(""))
}

function Method4(string){
    return (string.split("").map(item => item===item.toUpperCase() ? ` ${item}` : item).join(""))
}

let string = "satyaSaiNaga"
console.log(Method4(string))

