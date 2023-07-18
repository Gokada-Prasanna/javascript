function catMouse(x,j){
    if(x.indexOf("C")===-1 || x.indexOf("D")===-1 || x.indexOf("m")===-1){
        return "boring without all three"
    }
    else{
        const cat_position = x.indexOf("C")
        const dog_position = x.indexOf("D")
        const mouse_position = x.indexOf("m")

        
        if(Math.abs(cat_position- mouse_position) > j){
            return "Escaped!"
        }
        else if(((mouse_position < dog_position) && (dog_position < cat_position)) || ((cat_position<dog_position) && (dog_position<mouse_position))){
            return "Protected!"
        }
        else if(Math.abs(cat_position - mouse_position)<=j && !(((mouse_position < dog_position) && (dog_position < cat_position)) || ((cat_position<dog_position) && (dog_position<mouse_position)))){
            return "Caught!"
        }
    }
}


function method1(str,j){
    const index = {};
    for (let i = str.length - 1; i >= 0; --i) index[str[i]] = i;
    
    let {C, m, D} = index;
    
    if (!(m + C + D > 0)) return 'boring without all three';
    if (C > m) m = [C, C = m][0];
    if (m - C > j) return 'Escaped!';
    return D > C && D < m ? 'Protected!' : 'Caught!';
}
console.log(method1('......C.D.m...........', 13))