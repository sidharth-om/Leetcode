/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let num1=nums.join('')
    let num2=nums.sort((a,b)=>a-b).join('')
    let num3=nums.sort((a,b)=>b-a).join('')

    return num1===num2||num1===num3

};