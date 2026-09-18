/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
 let tar=(target.charCodeAt(0))

 for(let i=0;i<letters.length;i++){
    if(letters[i].charCodeAt(0)>tar){
        return letters[i]
    }
 }
 return letters[0]
};