/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let position=0


    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
        
            if(arr2[i]===arr1[j]){
                [arr1[position],arr1[j]]=[arr1[j],arr1[position]]
                position++
            }
        }
       
    }

   return([...(arr1.filter(num=>arr2.includes(num))) , ...(arr1.filter(num=>!arr2.includes(num)).sort((a,b)=>a-b))])

};