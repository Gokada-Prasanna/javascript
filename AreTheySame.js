function Method1(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }
    else{
        let condition1 = arr1.map(item => {
            if(arr2.includes(item)){
                return arr1.filter(i => i===item).length === arr2.filter(i => i === item).length
            }
            else{
                return true
            }
        }).every(item => item === true)
        let condition2 = arr2.map(item => {

            if(arr1.includes(Math.sqrt(item))){
                let valIndex = arr1.indexOf(Math.sqrt(item))
                arr1 = arr1.filter((i, index) => index != valIndex)
                return true
            }
            else{
                return false
            }
        }).every(item => item === true)

        return condition1 === condition2
    }
}



let arr1 = [121, 144, 19, 161, 19, 144, 19, 11] 
let arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(Method1(arr1, arr2))