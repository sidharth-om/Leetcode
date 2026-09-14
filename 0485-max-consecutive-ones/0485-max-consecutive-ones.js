/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0
    let temp=0

    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            temp+=1
            if(temp>max){
                max=temp
            }
        }else{
            temp=0
        }

    }
   return max
};