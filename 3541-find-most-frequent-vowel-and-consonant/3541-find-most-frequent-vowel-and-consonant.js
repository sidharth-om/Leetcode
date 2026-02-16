/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let seen={}
    let vowel=['a','e','i','o','u']
    let vcount=0
    let ncount=0

    for(const str of s){
        seen[str]=(seen[str]||0)+1
    }

    for(const obj in seen){
        if(vowel.includes(obj)&&seen[obj]>vcount){
            vcount=seen[obj]
        }
        if(!vowel.includes(obj)&&seen[obj]>ncount){
            ncount=seen[obj]
        }
    }



    return vcount+ncount
};