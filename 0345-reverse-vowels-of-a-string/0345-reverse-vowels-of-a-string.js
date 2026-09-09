/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
 let left=0
 let right=s.length-1
 let vowels='aeiouAEIOU'

 let arr=s.split('')

 while(left<right){
    while(left<right&&!vowels.includes(arr[left])){
        left++
    }
    while(left<right&&!vowels.includes(arr[right])){
        right--
    }

    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++
    right--

 }
 return arr.join('')
};