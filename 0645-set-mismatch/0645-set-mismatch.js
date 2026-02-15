/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
let seen={}
let result=[]


for(const num of nums){
    seen[num]=(seen[num]||0)+1
}


for(let i=0;i<nums.length;i++){
    if(!nums.includes(i+1)){
        result.push(i+1)
    }
}

for(const obj in seen){
    if(seen[obj]===2){
        result.unshift(Number(obj))
    }
}
return result
};