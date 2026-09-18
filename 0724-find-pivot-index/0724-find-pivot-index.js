/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let total=nums.reduce((acc,curr)=>acc+curr,0)
    let left=0

    for(let i=0;i<nums.length;i++){
        right=total-left-nums[i]

        if(right===left){
            return i
        }
        left+=nums[i]
    }

    return -1



    // let left=0
    // let right=0

    // for(let i=0;i<nums.length;i++){
    //     left=nums.slice(0,i).reduce((acc,curr)=>acc+curr,0)
    //     right=nums.slice(i+1).reduce((acc,curr)=>acc+curr,0)

    //     if(left===right){
    //        return i
    //     }
    // }
    // return -1
};