/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {

let left=0
let right=arr.length-2


while(left<=right){
   
    if(arr[left]===0){
        while(right>left){
            arr[right+1]=arr[right]
            right--
        }
        
          right=arr.length-2
        arr[left+1]=arr[left]
        
        left++
  
    }
    left++
   
}

console.log(arr)
};


