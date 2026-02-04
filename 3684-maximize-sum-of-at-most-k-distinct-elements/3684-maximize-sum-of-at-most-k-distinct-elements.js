/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let num=[...new Set(nums)]
    let result=[]


    while(k>0){
        let large=-Infinity
        for(let i=0;i<num.length;i++){
            if(num[i]>large&&!result.includes(num[i])){
                large=num[i]
            }
        }

        if(large===-Infinity)break
        result.push(large)
        k--
        

    }
      return result
   
  
};