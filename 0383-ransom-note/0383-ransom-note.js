/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   
 let length=ransomNote.length

    for(let i=0;i<ransomNote.length;i++){
        for(let j=0;j<magazine.length;j++){
            if(ransomNote[i]===magazine[j]){
                magazine=magazine.slice(0,j)+magazine.slice(j+1)
            
                length--
               
                break
            }
        }
    }
    return length===0?true:false
};