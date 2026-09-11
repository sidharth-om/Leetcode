/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let num=[...new Set(nums)]

    let first=-Infinity
    let second=-Infinity
    let third=-Infinity

    for(let i=0;i<num.length;i++){
        if(num[i]>first){
            third=second
            second=first
            first=num[i]
        }else if(num[i]>second&&num[i]<first){
            third=second
            second=num[i]
        }else if (num[i]>third&&num[i]<second){
            third=num[i]
        }
    }
    return third!==-Infinity?third:first
};