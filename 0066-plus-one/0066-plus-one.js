/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum=0
    let a=BigInt(digits.join(""))+1n
   let b=a.toString().split("")
    console.log(b)
    let c=[]
    for(let i=0;i<b.length;i++){
        c.push(Number(b[i]))
    }
    return c
    
};