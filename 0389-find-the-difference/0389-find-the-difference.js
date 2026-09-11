/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let merge=s+t
  const seen={}

  for(const char of merge){
    seen[char]=(seen[char]||0)+1
  }
  for(const obj in seen){
    if(seen[obj]%2!==0){
        return obj
    }
  }

};




