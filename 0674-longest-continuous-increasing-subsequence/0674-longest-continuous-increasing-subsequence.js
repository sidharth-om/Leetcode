/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count=1
    let tempCount=1
    for(let i=0;i<nums.length;i++){
        if(nums[i+1]>nums[i]){
           tempCount++
            count=Math.max(count,tempCount)
        }else{
           
            tempCount=1
        }
    }
    return count
};