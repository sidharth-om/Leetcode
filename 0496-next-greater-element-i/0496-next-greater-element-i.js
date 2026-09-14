/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result=[]

    for(const num of nums1){
        let arr=nums2.slice(nums2.indexOf(num))
     let n=arr.find(number=>number>num)

     if(n){
        result.push(n)
     }else{
        result.push(-1)
     }
    }
    return result
};