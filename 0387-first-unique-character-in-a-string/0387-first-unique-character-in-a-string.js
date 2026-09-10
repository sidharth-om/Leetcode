/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let seen={}

    for(const char of s){
        seen[char]=(seen[char]||0)+1
    }
    for(const char in seen){
        if(seen[char]===1){
            return s.indexOf(char)
        }
    }
    return -1
};