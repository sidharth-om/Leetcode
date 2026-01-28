/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   
    let max=0
    for(const sentence of sentences){
        if(sentence.split(' ').length>max){
            max=sentence.split(' ').length
        }
    }
    return max
};