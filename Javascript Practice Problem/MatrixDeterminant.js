function Method1(arr){  
    let length = arr.length
    function findMinor(arr,ith,jth){
        let minorArray = []
        for(let i=0; i<arr.length; i++){
            
            if(i!==ith){
                let row = []
                for(let j=0; j<arr[i].length; j++){
                    if(j!==jth){
                        row.push(arr[i][j])
                    }
                }
                minorArray.push(row)
            }
            
        }

        return minorArray
    }
    function calculateDeterminant(arr){
        let n= arr.length
        let det = 0
        if(n === 1){
            return arr[0]
        }
        
        if(arr.length >= 2){
            for(let i=0; i<arr[0].length; i++){
                if(i%2===0){
                    det += arr[0][i]*calculateDeterminant(findMinor(arr,0,i))
                }
                else{
                    det -= arr[0][i]*calculateDeterminant(findMinor(arr,0,i))
                }
            }
        }

        return det
    }
return calculateDeterminant(arr)
}

function Method2(m){
        if (m.length == 0) return 0;
        if (m.length == 1) return m[0][0];
        if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
        if (m.length > 2) {
          return m.reduce((prev, curr, i, arr) => {
            console.log(i)
            let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));
            return prev + (i % 2 == 0 ? 1 : -1 ) * curr[0] * Method2(miniArr);
          }, 0);
        }
      
}

const Method3 = m => m.length === 1 ? m[0][0] : m[0].reduce((s, n, i) => s + (i % 2 === 0 ? 1 : -1) * n * Method3(m.slice(1).map(r => r.filter((_, j) => j !== i))), 0);

let arr = [[2,4,2],[3,1,1],[1,2,0]]
console.log(Method2(arr))