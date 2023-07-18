// function generatorBC(url, separator){
//     let flag = false
//     let result = ""
//     let urlArray = url.split("/")
//     result += "<a href=\"/\">HOME</a>" + ` ${separator} `
//     for(var i=1; i<urlArray.length-1; i++){
//         if(urlArray[i+1].indexOf("index")===-1){
//             if(urlArray[i].length<30){
//                 let urlString = urlArray[i].split("-").map(item => item.toUpperCase()).join(" ")
                
//             result += `<a href=\"/${urlArray[i]}/\">${urlString}</a>` + ` ${separator} `
//         }
//         else{
//             // let url = urlArray[i].replace(/(^-the-$|^-of-$|^-in-$|^-from-$|^-by-$|^-with-$|^-and-$|^-or-$|^-for-$|^-to-$|^-at-$|^-a-$)/g,"")
//             let urlString = ""
//             let url = urlArray[i].replace(/(\bthe\b|\bof\b|\bin\b|\bfrom\b|\bby\b|\bwith\b|\band\b|\bor\b|\bfor\b|\bto\b|\bat\b|\ba\b)/g,"").split("-")
//             url.map(item => {
//                 if(item !== ""){
//                     urlString += item[0].toUpperCase()
//                 }
//             })
//             result += `<a href=\"/${urlArray[i]}/\">${urlString.toUpperCase()}</a>` + ` ${separator} `
//         }
//         }
//         else{
//             result += `<span class=\"active\">${urlArray[i].toUpperCase()}</span>`
//             flag = true 
//             break 
//         }
//     }
//     if(!flag){
//         let urlString = urlArray[i].split("-").map(item => item.toUpperCase()).join(" ")
//         if(urlString.indexOf(".")!==-1){
//         urlString = urlString.slice(0, urlString.indexOf("."))
//         }
        
//         result += `<span class=\"active\">${urlString}</span>`
//     }
//     return result
// }

function generateBC(url, separator){
    var flag = false
    let result = ""
    let urlArray = url.replace("http://","").replace("https://","").split("/")
    
    if(urlArray.length > 1){
        result += "<a href=\"/\">HOME</a>" + `${separator}`
    for(var i=1; i<urlArray.length-1; i++){
        if(urlArray[i+1].indexOf("index")===-1){
            if(urlArray[i].length<30){
                let urlString = urlArray[i].split("-").map(item => item.toUpperCase()).join(" ")
                let href=""
                for(let j=1;j<=i;j++){
                    href += "/"+urlArray[j]
                }
                
            result += "<a href=\""+href+"/\">"+urlString+"</a>"+ `${separator}`
        }
        else{
            // let url = urlArray[i].replace(/(^-the-$|^-of-$|^-in-$|^-from-$|^-by-$|^-with-$|^-and-$|^-or-$|^-for-$|^-to-$|^-at-$|^-a-$)/g,"")
            let urlString = ""
            let url = urlArray[i].replace(/(\bthe\b|\bof\b|\bin\b|\bfrom\b|\bby\b|\bwith\b|\band\b|\bor\b|\bfor\b|\bto\b|\bat\b|\ba\b)/g,"").split("-")
            url.map(item => {
                if(item !== ""){
                    urlString += item[0].toUpperCase()
                }
            })
            let href=""
                for(let j=1;j<=i;j++){
                    href += "/"+urlArray[j]
                }
                

            result += "<a href=\""+href+"/\">"+urlString.toUpperCase()+"</a>" + `${separator}`
        }
        }
        else{
            result += "<span class=\"active\">"+urlArray[i].toUpperCase()+"</span>"
            flag = true 
            break 
        }
    }
    if(!flag){
        let urlString = urlArray[i].split("-").map(item => item.toUpperCase()).join(" ")
        if(urlString.indexOf(".")!==-1){
        urlString = urlString.slice(0, urlString.indexOf("."))
        }
        
        result += "<span class=\"active\">"+urlString+"</span>"
    }
}
else(
    result += "<span class=\"acitve\">HOME</span>"
)
    return result
}

let url ="http://pippi.pi"
let separator = "*"

console.log(generateBC(url, separator))