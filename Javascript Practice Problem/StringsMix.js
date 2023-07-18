function mix(s1,s2){
    let cache1 = {}
    let cache2 = {}
    s1.toLowerCase().replace(/[^a-z]/g,"").split("").filter(i => {
        cache1[i] = (cache1[i]||0)+1
    })
    s2.toLowerCase().replace(/[^a-z]/g,"").split("").filter(i => {
        cache2[i] = (cache1[2]||0)+1
    })
return Object.values(cache1).sort()
}

let s1= "my&friend&Paul has heavy hats! &"
let s2 = "my friend John has many many friends &"

console.log(mix(s1,s2))