function Method1(arr){
arr = (arr.join(" ").toUpperCase().replace(/NORTH SOUTH|SOUTH NORTH|WEST EAST|EAST WEST/g, "").split(" "))
 arr = arr.filter(item => item!=="")
arr = (arr.join(" ").toUpperCase().replace(/NORTH SOUTH|SOUTH NORTH|WEST EAST|EAST WEST/g, "").split(" "))
return (arr.filter(item => item!==""))
}

function Method2(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }

  function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)){ str = str.replace(pattern,''); console.log(str)};
    console.log(str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[])
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
  }

let arr = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]
console.log(dirReduc(arr))