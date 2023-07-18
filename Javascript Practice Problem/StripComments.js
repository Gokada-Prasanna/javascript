function solution(input, markers){
    return input.split('\n').map(line => markers.reduce((line,marker) => line.split(marker)[0].trim(), line)).join("\n")
}

function Method1(input, markers){
        return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
}

function Method2(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

let input = "apples, pears# and bananas\ngrapes\nbananas !apples"
let markers = ["#", "!"]

console.log(Method1(input, markers))