/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result=[]
    for(let i=left;i<=right;i++){
        let a=String(i).split("")
        if(a.every(v=>i%v===0)){
            result.push(i)
        }
    }

   return result
};