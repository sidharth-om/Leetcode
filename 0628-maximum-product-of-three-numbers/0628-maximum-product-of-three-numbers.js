/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   
 nums=nums.sort((a,b)=>b-a)

     let a= nums[0]*nums[1]*nums[2]
     let max=a
     let b=nums[nums.length-1]*nums[nums.length-2]
    for(let i=nums.length-3;i>=0;i--){
        if(b*nums[i]>max){
           max=b*nums[i]
        }
    }
    return a>max?a:max
    
 
};