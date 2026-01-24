/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

    let s=[...s1.split(' '),...s2.split(' ')]
    let seen={}
    let result=[]

    for(const word in s){
        seen[s[word]]=(seen[s[word]]||0)+1
       
    }

    for(const word in seen){
        if(seen[word]===1){
            result.push(word)
        }
    }


return result
    
};