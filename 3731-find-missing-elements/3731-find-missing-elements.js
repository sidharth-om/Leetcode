/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let result=[]


    for(let i=Math.min(...nums);i<=Math.max(...nums);i++){
        if(!nums.includes(i)){
            result.push(i)
        }
     
    }
    return result
};