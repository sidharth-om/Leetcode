/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
let seen = {};
    let result = [];
    
    for (const num of nums) {
        seen[num] = (seen[num] || 0) + 1;
    }
    
 
    for (const key in seen) {
        if (seen[key] === 2) {
            result[0] = Number(key);
        }
    }
    
    
    for (let i = 1; i <= nums.length; i++) {
        if (!seen[i]) {
            result[1] = i;
            break;
        }
    }
    
    return result;

};