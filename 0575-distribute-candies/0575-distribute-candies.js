/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let result=[]
    let n=candyType.length

    let arr=[...new Set(candyType)]
  
  if(arr.length<=n/2)return arr.length

    for(let i=0;i<n/2;i++){
        result.push(arr[i])
    }
    return result.length
};