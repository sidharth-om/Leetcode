/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let result=[]

    for(let i=0;i<ops.length;i++){
        if(ops[i]==='+'){
            result.push(result[result.length-1]+result[result.length-2])
        }else if(ops[i]==='D'){
            result.push(2*result[result.length-1])
        }else if(ops[i]==='C'){
            result.pop()
        }else{
            result.push(Number(ops[i]))
        }
    }

    return result.reduce((acc,curr)=>acc+curr,0)

    console.log(result)
};